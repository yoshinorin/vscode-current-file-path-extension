'use strict';

import {StatusBarAlignment, StatusBarItem, window } from 'vscode';

export class AbsolutePath {

    private _statusBarItem: StatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
    private _unixLikePath: string = "";
    private _windowsLikePath: string = "";

    constructor() {
        let editor = window.activeTextEditor;

        if (!editor) {
            this._statusBarItem.hide();
            return;
        }

        this._unixLikePath = editor.document.uri.fsPath.replace(/\\/g, "/");
        this._windowsLikePath = editor.document.uri.fsPath.replace(/\//g, "\\");
        this._statusBarItem.text = this._unixLikePath;
        this._statusBarItem.show();
    }

    dispose() {
        this._statusBarItem.dispose();
    }
}
