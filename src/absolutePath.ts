'use strict';

import { StatusBarAlignment, StatusBarItem, window, workspace } from 'vscode';
import { Config } from './config';
import { QuickPicker, QuickPickerAction } from './quickPicker';
import { PathStyles } from './utils/pathStyles';
const clipboardy = require('clipboardy');
const pathModule = require('path');

export class AbsolutePath {

    private readonly _config: Config;
    private get config(): Config {
        return this._config;
    }

    private readonly _quickPicker: QuickPicker;
    private get quickPicker(): QuickPicker {
        return this._quickPicker;
    }

    private readonly _statusBarItem: StatusBarItem;
    private get statusBarItem(): StatusBarItem {
        return this._statusBarItem;
    }

    private get isWorkSpace(): boolean {
        return workspace.rootPath !== undefined;
    }

    private get workSpaceRootPath(): undefined | string {
        return workspace.rootPath;
    }

    private get workSpaceName(): undefined | string {
        return workspace.name;
    }

    private _currentStyle: string;
    private get currentStyle(): string {
        if (this._currentStyle === PathStyles.UNIX) {
            return PathStyles.UNIX;
        }
        return PathStyles.WINDOWS;
    }
    private set currentStyle(style: string) {
        this._currentStyle = style;
    }

    private _isFromWorkSpaceRoot: boolean;
    private get isFromWorkSpaceRoot(): boolean {
        return this._isFromWorkSpaceRoot;
    }
    private set isFromWorkSpaceRoot(isFromWorkSpaceRoot: boolean) {
        this._isFromWorkSpaceRoot = isFromWorkSpaceRoot;
    }

    private _currentFromSystemRootPath: string = "";
    private get currentFromSystemRootPath(): string {
        if (this.currentStyle === PathStyles.UNIX) {
            return this.toUnixStyle(this._currentFromSystemRootPath);
        }
        return this.toWindowsStyle(this._currentFromSystemRootPath);
    }
    private set currentFromSystemRootPath(path: string) {
        this._currentFromSystemRootPath = path;
    }

    private _currentFromWorkSpaceRootPath: string = "";
    private get currentFromWorkSpaceRootPath(): string {
        if (this.currentStyle === PathStyles.UNIX) {
            return this.toUnixStyle(this._currentFromWorkSpaceRootPath);
        }
        return this.toWindowsStyle(this._currentFromWorkSpaceRootPath);
    }
    private set currentFromWorkSpaceRootPath(path: string) {
        let wsPath = this.workSpaceRootPath;
        if (wsPath === undefined) {
            this._currentFromWorkSpaceRootPath = path;
        } else {
            this._currentFromWorkSpaceRootPath = pathModule.join(this.workSpaceName, this.toUnixStyle(path).replace(this.toUnixStyle(wsPath), ""));
        }
    }

    constructor() {
        this._config = new Config();
        this._quickPicker = new QuickPicker();
        this._isFromWorkSpaceRoot = this.config.isFromWorkSpaceRoot;
        this._currentStyle = this.config.defaultPathStyle;
        this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left, this.config.priorityInStatusBar);
        this._statusBarItem.tooltip = "Open Menus";
        this._statusBarItem.command = 'absolutePath.executeQuickPickerAction';
        this.update();
    }

    private toUnixStyle(path: string): string {
        return path.replace(/\\/g, "/");
    }

    private toWindowsStyle(path: string): string {
        return path.replace(/\//g, "\\");
    }

    private updateStatusBar() {
        if (this.isFromWorkSpaceRoot) {
            this.statusBarItem.text = this.currentFromWorkSpaceRootPath;
        } else {
            this.statusBarItem.text = this.currentFromSystemRootPath;
        }
    }

    public update() {
        let editor = window.activeTextEditor;
        if (!editor) {
            this.statusBarItem.hide();
            return;
        }

        this.currentFromSystemRootPath = editor.document.uri.fsPath;
        this.currentFromWorkSpaceRootPath = editor.document.uri.fsPath;

        this.updateStatusBar();
        this.statusBarItem.show();
    }

    public executeQuickPickerAction() {
        this.quickPicker.getActionId(this.currentStyle, this.isWorkSpace, this.isFromWorkSpaceRoot).then((actionId) => {
            switch (actionId) {
                case QuickPickerAction.viewUnixStyle:
                    this.currentStyle = PathStyles.UNIX;
                    this.updateStatusBar();
                    return;
                case QuickPickerAction.viewWindowsStyle:
                    this.currentStyle = PathStyles.WINDOWS;
                    this.updateStatusBar();
                    return;
                case QuickPickerAction.viewFromSystemRoot:
                    this.isFromWorkSpaceRoot = false;
                    this.updateStatusBar();
                    return;
                case QuickPickerAction.viewFromWorkSpaceRoot:
                    this.isFromWorkSpaceRoot = true;
                    this.updateStatusBar();
                    return;
                case QuickPickerAction.copy:
                    let path = this.isFromWorkSpaceRoot ? this.currentFromWorkSpaceRootPath : this.currentFromSystemRootPath;
                    clipboardy.writeSync(path);
                default:
                    return;
            }
        });
    }

    dispose() {
        this.statusBarItem.dispose();
    }
}
