'use strict';

import { StatusBarAlignment, StatusBarItem, window } from 'vscode';
import { Config } from './config';
import { QuickPicker, QuickPickerAction } from './quickPicker';
import { PathStyles } from './utils/pathStyles';
const clipboardy = require('clipboardy');

export class AbsolutePath {

    private _config: Config;
    private _quickPicker: QuickPicker;
    private _unixLikePath: string = "";
    private _windowsLikePath: string = "";
    private _statusBarItem: StatusBarItem;

    private _currentStyle: string = "";
    public get currentStyle() : string {
        if (this._currentStyle === PathStyles.UNIX) {
            return PathStyles.UNIX;
        }
        return PathStyles.WINDOWS;
    }

    public get currentPath() : string {
        if (this.currentStyle === PathStyles.UNIX) {
            return this._unixLikePath;
        }
        return this._windowsLikePath;
    }

    constructor() {
        this._config = new Config();
        this._quickPicker = new QuickPicker();
        this._currentStyle = this._config.defaultPathStyle;
        this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left, this._config.priorityInStatusBar);
        this._statusBarItem.tooltip = "Show Menus";
        this._statusBarItem.command = 'absolutePath.executeQuickPickerAction';
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

        this._statusBarItem.text = this.currentPath;
        this._statusBarItem.show();
    }

    public executeQuickPickerAction() {
        this._quickPicker.getActionId(this.currentStyle).then((actionId) => {
            switch (actionId) {
                case QuickPickerAction.viewUnixStyle:
                    this._currentStyle = PathStyles.UNIX;
                    this._statusBarItem.text = this.currentPath;
                    return;
                case QuickPickerAction.viewWindowsStyle:
                    this._currentStyle = PathStyles.WINDOWS;
                    this._statusBarItem.text = this.currentPath;
                    return;
                case QuickPickerAction.copy:
                    clipboardy.writeSync(this.currentPath);
                default:
                    return;
            }
        });
    }

    dispose() {
        this._statusBarItem.dispose();
    }
}
