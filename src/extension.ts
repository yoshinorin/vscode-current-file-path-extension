'use strict';

import { ExtensionContext } from 'vscode';
import { AbsolutePath } from './absolutePath';

export function activate(context: ExtensionContext) {
    console.log('Congratulations, your extension "display-absolute-path" is now active!');

    let absolutePath = new AbsolutePath();
    context.subscriptions.push(absolutePath);
}

export function deactivate() {
}
