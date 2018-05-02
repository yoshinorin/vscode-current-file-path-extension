'use strict';

import {StatusBarAlignment, StatusBarItem, window, workspace } from 'vscode';

export class AbsolutePath {

    private _config: any;
    private _unixLikePath: string = "";
    private _windowsLikePath: string = "";
    private _statusBarItem: StatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);

    constructor() {
        let editor = window.activeTextEditor;
        this._config = workspace.getConfiguration("absolutepath");

        if (!editor) {
            this._statusBarItem.hide();
            return;
        }

        this._unixLikePath = editor.document.uri.fsPath.replace(/\\/g, "/");
        this._windowsLikePath = editor.document.uri.fsPath.replace(/\//g, "\\");
        if (this.isUnixLike) {
            this._statusBarItem.text = this._unixLikePath;
        } else {
            this._statusBarItem.text = this._windowsLikePath;
        }
        this._statusBarItem.show();
    }

    private isUnixLike(): boolean {
        //TODO: Use enum
        if (this._config.pathType === "unix") {
            return true;
        }
        return false;
    }

    dispose() {
        this._statusBarItem.dispose();
    }
}
