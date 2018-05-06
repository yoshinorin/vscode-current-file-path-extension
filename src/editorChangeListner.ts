'use strict';

import { AbsolutePath } from './absolutePath';
import { Disposable, window } from 'vscode';

export class EditorChangeListner {

    private _absolutePath: AbsolutePath;
    private _disposable: Disposable;

    private _onEvent() {
        this._absolutePath.display();
    }

    constructor (absolutePath: AbsolutePath) {
        this._absolutePath = absolutePath;

        let subscriptions: Disposable[] = [];
        window.onDidChangeActiveTextEditor(this._onEvent, this, subscriptions)
        this._disposable = Disposable.from(...subscriptions);
    }

    dispose() {
        this._disposable.dispose();
    }
}
