'use strict';

import { ExtensionContext } from 'vscode';
import { AbsolutePath } from './absolutePath';
import { EditorChangeListner } from './editorChangeListner';

export function activate(context: ExtensionContext) {

    let absolutePath = new AbsolutePath();
    let listner = new EditorChangeListner(absolutePath);

    context.subscriptions.push(listner);
    context.subscriptions.push(absolutePath);
}

export function deactivate() {
}
