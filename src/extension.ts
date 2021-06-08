// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-extension-quasar-template" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('vscode-extension-quasar-template.hellocustomview', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World from vscode-extension-quasar-template!');

        const panel = vscode.window.createWebviewPanel('vscode-extension-quasar-template', 'Hello, CustomView', vscode.ViewColumn.One, {
            enableScripts: true
        });

        const uri = panel.webview.asWebviewUri(vscode.Uri.file(path.join(context.extensionPath, 'custom_editor', 'dist', 'main.js')));

        panel.webview.html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body>
                    <div id="app"></div>
                    <script src="${uri}"></script>
                </body>
            </html>
        `;

        panel.webview.onDidReceiveMessage(res => {
            // panel.webview.postMessage({});
        });
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
