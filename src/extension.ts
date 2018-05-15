'use strict';

import { ExtensionContext, commands } from 'vscode';
import { CurrentFile } from './currentFile';
import { EditorChangeListner } from './editorChangeListner';

export function activate(context: ExtensionContext) {

    let currentFile = new CurrentFile();
    let listner = new EditorChangeListner(currentFile);

    let disposable = commands.registerCommand('currentFilePath.executeQuickPickerAction', () => {
        currentFile.executeQuickPickerAction();
    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(listner);
    context.subscriptions.push(currentFile);
}

export function deactivate() {
}
