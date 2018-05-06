'use strict';

import { ExtensionContext } from 'vscode';
import { AbsolutePath } from './absolutePath';
import { EditorChangeListner } from './editorChangeListner';
import { Config } from './config';

export function activate(context: ExtensionContext) {

    let config = new Config();
    let absolutePath = new AbsolutePath(config);
    let listner = new EditorChangeListner(absolutePath);

    context.subscriptions.push(listner);
    context.subscriptions.push(absolutePath);
}

export function deactivate() {
}
