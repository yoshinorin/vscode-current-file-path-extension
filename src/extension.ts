'use strict';

import { ExtensionContext, commands } from 'vscode';
import { AbsolutePath } from './absolutePath';
import { EditorChangeListner } from './editorChangeListner';

export function activate(context: ExtensionContext) {

    let absolutePath = new AbsolutePath();
    let listner = new EditorChangeListner(absolutePath);

    let disposable = commands.registerCommand('absolutepath.showQuickPicker', () => {
        absolutePath.showQuickPicker();
    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(listner);
    context.subscriptions.push(absolutePath);
}

export function deactivate() {
}
