'use strict';

import { ExtensionContext } from 'vscode';
import { AbsolutePath } from './absolutePath';
import { ChangeEditorListner } from './changeEditorListner';

export function activate(context: ExtensionContext) {

    let absolutePath = new AbsolutePath();
    let listner = new ChangeEditorListner(absolutePath);

    context.subscriptions.push(listner);
    context.subscriptions.push(absolutePath);
}

export function deactivate() {
}
