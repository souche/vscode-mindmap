'use strict';
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { resourceSchema } from './constant';
import { Xmind, Img } from './services';
const matchableFileTypes: string[] = ['xmind', 'km'];

// type ProcessService = Xmind | Markdown;

export function activate(context: vscode.ExtensionContext) {
  const openedPanelMap = new Map<string, boolean | undefined | null>();
  let isFirstActivate: boolean = true;
  let timer: any = null;
  let disposable = vscode.commands.registerTextEditorCommand(
    'extension.mindmap',
    () => {
      const editor: vscode.TextEditor | undefined =
        vscode.window.activeTextEditor;
      const onDiskPath = vscode.Uri.file(
        path.join(context.extensionPath, 'webui', 'mindmap.html')
      );
      const resourcePath = vscode.Uri.file(
        path.join(context.extensionPath, 'webui')
      );
      const resourceRealPath = resourcePath.with({ scheme: resourceSchema });
      const fileContent =
        process.platform === 'win32'
          ? fs.readFileSync(onDiskPath.path.slice(1)).toString()
          : fs.readFileSync(onDiskPath.path).toString();
      const html = fileContent.replace(
        /\$\{vscode\}/g,
        resourceRealPath.toString()
      );
      const fileName = (<vscode.TextEditor>editor).document.fileName;
      const basename = path.basename(fileName);
      const extName = path.extname(fileName);
      const xmindService = new Xmind(fileName);
      const imgService = new Img();
      const importData = getImportData(fileName, extName, xmindService) || '{}';

      if (!matchableFileTypes.includes(extName.slice(1))) {
        return;
      }

      const panel = createWebviewPanel(basename);
      panel.webview.html = html;
      panel.webview.onDidReceiveMessage(
        message => {
          let destFileName = '';
          switch (message.command) {
            case 'loaded':
              panel.webview.postMessage({
                command: 'import',
                importData,
                extName,
              });
              return;

            case 'save':
              try {
                const retData = JSON.parse(message.exportData);
                destFileName =
                  extName === '.xmind'
                    ? fileName.replace(/(\.xmind)/, '.km')
                    : fileName;

                writeFileToDisk(destFileName, JSON.stringify(retData, null, 4));
              } catch (ex) {
                console.error(ex);
              }
              return;

            case 'exportToImage':
              const buffer = imgService.base64ToPng(message.exportData);
              destFileName = fileName.replace(/(\.xmind|\.kme|\.km)/, '.png');
              writeFileToDisk(destFileName, buffer);
              return;
          }
        },
        undefined,
        context.subscriptions
      );

      panel.onDidDispose(
        () => {
          // emit event to webview
        },
        null,
        context.subscriptions
      );
    }
  );

  const executeFirstCommand = (originFileName: string) => {
    if (isFirstActivate) {
      isFirstActivate = false;
      openedPanelMap.set(originFileName, true);
      timer = setTimeout(() => {
        vscode.commands.executeCommand('extension.mindmap');
      }, 300);
    }
  };

  context.subscriptions.push(disposable);
  executeFirstCommand(
    (vscode.window.activeTextEditor as vscode.TextEditor).document.fileName
  );
  vscode.workspace.onDidOpenTextDocument(e => {
    const originFileName = e.fileName.replace('.git', '');
    if (isFirstActivate) {
      executeFirstCommand(originFileName);
      return;
    }

    if (!openedPanelMap.get(originFileName)) {
      openedPanelMap.set(originFileName, true);
      timer = setTimeout(() => {
        vscode.commands.executeCommand('extension.mindmap', originFileName);
      }, 300);
    }
  });
  vscode.workspace.onDidCloseTextDocument(e => {
    if (e.fileName.endsWith('.git')) {
      return;
    }

    if (openedPanelMap.get(e.fileName)) {
      clearTimeout(timer);
      openedPanelMap.set(e.fileName, false);
    }
  });
}

export function deactivate() {}

/**
 * create webview
 * @param fileName
 */
function createWebviewPanel(fileName: string) {
  return vscode.window.createWebviewPanel(
    'mindMap',
    `${fileName}-mindmap`,
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
    }
  );
}

/**
 * processing source data
 * @param fileName
 * @param extName
 */
function getImportData(fileName: string, extName: string, xmind: Xmind) {
  if (extName === '.xmind') {
    return JSON.stringify(xmind.process());
  }

  return fs.readFileSync(fileName).toString();
}

function writeFileToDisk(fileName: string, data: any) {
  fs.writeFile(fileName, data, (err: any) => {
    if (err) {
      vscode.window.showErrorMessage(`write ${fileName} failed`);
      console.log(err);
      throw err;
    }
    vscode.window.showInformationMessage(`write ${fileName} successed`);
  });
}
