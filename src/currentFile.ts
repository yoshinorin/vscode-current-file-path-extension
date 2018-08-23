'use strict';

import { StatusBarAlignment, StatusBarItem, window, workspace } from 'vscode';
import { Config } from './config';
import { QuickPicker, QuickPickerAction } from './quickPicker';
import { PathStyles, PathStartingFrom } from './utils/types';
const clipboardy = require('clipboardy');
const pathModule = require('path');

export class CurrentFile {

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
        return workspace.workspaceFolders !== undefined;
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

    private _currentPathStartingFrom: string;
    private get currentPathStartingFrom(): string {
        if (this._currentPathStartingFrom === PathStartingFrom.ROOT_DIRECTORY) {
            return PathStartingFrom.ROOT_DIRECTORY;
        }
        return PathStartingFrom.WORK_SPACE;
    }
    private set currentPathStartingFrom(statingFrom: string) {
        this._currentPathStartingFrom = statingFrom;
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
        let folders = workspace.workspaceFolders;
        if (folders === undefined) {
            this._currentFromWorkSpaceRootPath = path;
            return;
        }
        let rootFolderObj = folders.find(x => {
            return this.toUnixStyle(path).startsWith(this.toUnixStyle(x.uri.fsPath));
        });
        if (rootFolderObj === undefined) {
            this._currentFromWorkSpaceRootPath = path;
            return;
        }
        this._currentFromWorkSpaceRootPath = pathModule.join(rootFolderObj.name, this.toUnixStyle(path).replace(this.toUnixStyle(rootFolderObj.uri.fsPath), ""));
    }

    private _name: string = "";
    private get name(): string {
        return this._name;
    }
    private set name(s: string) {
        this._name = s;
    }

    constructor() {
        this._config = new Config();
        this._quickPicker = new QuickPicker();
        this._currentPathStartingFrom = this.config.defaultPathStartingFrom;
        this._currentStyle = this.config.defaultPathStyle;
        this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left, this.config.priorityInStatusBar);
        this._statusBarItem.tooltip = "Open Menus";
        this._statusBarItem.command = 'currentFilePath.executeQuickPickerAction';
        this.update();
    }

    private toUnixStyle(path: string): string {
        return path.replace(/\\/g, "/");
    }

    private toWindowsStyle(path: string): string {
        return path.replace(/\//g, "\\");
    }

    private updateStatusBar() {
        if (this.currentPathStartingFrom === PathStartingFrom.ROOT_DIRECTORY) {
            this.statusBarItem.text = this.currentFromSystemRootPath;
        } else {
            this.statusBarItem.text = this.currentFromWorkSpaceRootPath;
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
        this.name = pathModule.basename(editor.document.uri.fsPath);

        this.updateStatusBar();
        this.statusBarItem.show();
    }

    public viewUnixStyle() {
        this.currentStyle = PathStyles.UNIX;
        this.updateStatusBar();
    }

    public viewWindowsStyle() {
        this.currentStyle = PathStyles.WINDOWS;
        this.updateStatusBar();
    }

    public viewFromSystemRoot() {
        this.currentPathStartingFrom = PathStartingFrom.ROOT_DIRECTORY;
        this.updateStatusBar();
    }

    public viewFromWorkSpaceRoot() {
        this.currentPathStartingFrom = PathStartingFrom.WORK_SPACE;
        this.updateStatusBar();
    }

    public copy() {
        if (this.currentPathStartingFrom === PathStartingFrom.ROOT_DIRECTORY) {
            clipboardy.writeSync(this.currentFromSystemRootPath);
            return;
        }
        clipboardy.writeSync(this.currentFromWorkSpaceRootPath);
    }

    public copyFileName() {
        clipboardy.writeSync(this.name);
    }

    public copyFileNameWithOutExtension() {
        clipboardy.writeSync(this.name.slice(0, this.name.lastIndexOf(".")));
    }

    public executeQuickPickerAction() {
        this.quickPicker.getActionId(this.currentStyle, this.isWorkSpace, this.currentPathStartingFrom).then((actionId) => {
            switch (actionId) {
                case QuickPickerAction.viewUnixStyle:
                    this.viewUnixStyle();
                    return;
                case QuickPickerAction.viewWindowsStyle:
                    this.viewWindowsStyle();
                    return;
                case QuickPickerAction.viewFromSystemRoot:
                    this.viewFromSystemRoot();
                    return;
                case QuickPickerAction.viewFromWorkSpaceRoot:
                    this.viewFromWorkSpaceRoot();
                    return;
                case QuickPickerAction.copy:
                    this.copy();
                    return;
                case QuickPickerAction.copyFileName:
                    this.copyFileName();
                    return;
                case QuickPickerAction.copyFileNameWithOutExtension:
                    this.copyFileNameWithOutExtension();
                    return;
                default:
                    return;
            }
        });
    }

    dispose() {
        this.statusBarItem.dispose();
    }
}
