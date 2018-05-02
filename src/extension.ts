'use strict';

import { ExtensionContext } from 'vscode';
import { AbsolutePath } from './absolutePath';

export function activate(context: ExtensionContext) {

    let absolutePath = new AbsolutePath();
    context.subscriptions.push(absolutePath);
}

export function deactivate() {
}
