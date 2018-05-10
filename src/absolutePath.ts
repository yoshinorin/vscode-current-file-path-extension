'use strict';

import { StatusBarAlignment, StatusBarItem, window } from 'vscode';
import { Config } from './config';
import { QuickPicker } from './quickPicker';
import { PathStyles } from './utils/pathStyles';

export class AbsolutePath {

    private _config: Config;
    private _quickPicker: QuickPicker;
    private _currentStyle: string = "";
    private _unixLikePath: string = "";
    private _windowsLikePath: string = "";
    private _statusBarItem: StatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);

    constructor() {
        this._config = new Config();
        this._quickPicker = new QuickPicker();
        this._currentStyle = this._config.defaultPathStyle;
        this._statusBarItem.tooltip = "Show Menus";
        this._statusBarItem.command = 'absolutepath.showQuickPicker';
        this.display();
    }

    public display() {
        let editor = window.activeTextEditor;
        if (!editor) {
            this._statusBarItem.hide();
            return;
        }

        this._unixLikePath = editor.document.uri.fsPath.replace(/\\/g, "/");
        this._windowsLikePath = editor.document.uri.fsPath.replace(/\//g, "\\");

        if (this.isUnixLike()) {
            this._statusBarItem.text = this._unixLikePath;
        } else {
            this._statusBarItem.text = this._windowsLikePath;
        }
        this._statusBarItem.show();
    }

    public showQuickPicker() {
        this._quickPicker.getActionId().then((actionId) => {
            //TODO: Implements actions.
        });
    }

    private isUnixLike(): boolean {
        if (this._currentStyle === PathStyles.UNIX) {
            return true;
        }
        return false;
    }

    dispose() {
        this._statusBarItem.dispose();
    }
}
