'use strict';
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { resourceSchema } from './constant';
import { Xmind, Img } from './services';

export function activate(context: vscode.ExtensionContext) {
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
      const panel = createWebviewPanel(basename);
      const importData = getImportData(fileName, extName, xmindService) || '{}';

      panel.webview.html = html;
      panel.webview.onDidReceiveMessage(
        message => {
          let destFileName = '';
          switch (message.command) {
            case 'loaded':
              panel.webview.postMessage({
                command: 'import',
                importData,
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

  context.subscriptions.push(disposable);
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
  });
}
