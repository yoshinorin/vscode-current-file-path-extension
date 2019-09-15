"use strict";

import { CurrentFile } from "./currentFile";
import { Disposable, window } from "vscode";

export class EditorChangeListner {
    private _currentFile: CurrentFile;
    private _disposable: Disposable;

    private _onEvent() {
        this._currentFile.update();
    }

    constructor(currentFile: CurrentFile) {
        this._currentFile = currentFile;

        let subscriptions: Disposable[] = [];
        window.onDidChangeActiveTextEditor(this._onEvent, this, subscriptions);
        this._disposable = Disposable.from(...subscriptions);
    }

    dispose() {
        this._disposable.dispose();
    }
}
