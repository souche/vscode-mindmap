'use strict';
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { resourceSchema } from './constant';

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
      const basename = path.basename(
        (<vscode.TextEditor>editor).document.fileName
      );

      const panel = createWebviewPanel(basename);

      panel.webview.html = html;
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}

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
