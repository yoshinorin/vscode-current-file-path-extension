'use strict';

import { ExtensionContext } from 'vscode';
import { AbsolutePath } from './absolutePath';
import { ChangeEditorListner } from './changeEditorListner';
import { Config } from './config';

export function activate(context: ExtensionContext) {

    let config = new Config();
    let absolutePath = new AbsolutePath(config);
    let listner = new ChangeEditorListner(absolutePath);

    context.subscriptions.push(listner);
    context.subscriptions.push(absolutePath);
}

export function deactivate() {
}
