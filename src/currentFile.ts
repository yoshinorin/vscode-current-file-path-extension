"use strict";

import { commands, StatusBarAlignment, StatusBarItem, window, workspace, env } from "vscode";
import { Config } from "./config";
import { QuickPicker, QuickPickerAction } from "./quickPicker";
import { PathStyles, PathStartsFrom } from "./utils/types";
import { join, basename } from 'path';
const clipboard= env.clipboard;


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

    private _currentPathStartsFrom: string;
    private get currentPathStartsFrom(): string {
        if (this._currentPathStartsFrom === PathStartsFrom.ROOT_DIRECTORY) {
            return PathStartsFrom.ROOT_DIRECTORY;
        }
        return PathStartsFrom.WORK_SPACE;
    }
    private set currentPathStartsFrom(statingFrom: string) {
        this._currentPathStartsFrom = statingFrom;
    }

    private _startsFromRootDirectoryPath: string = "";
    private get startsFromRootDirectoryPath(): string {
        if (this.currentStyle === PathStyles.UNIX) {
            return this.toUnixStyle(this._startsFromRootDirectoryPath);
        }
        return this.toWindowsStyle(this._startsFromRootDirectoryPath);
    }
    private set startsFromRootDirectoryPath(path: string) {
        this._startsFromRootDirectoryPath = path;
    }

    private _startsFromWorkSpaceHighestDirectoryPath: string = "";
    private get startsFromWorkSpaceHighestDirectoryPath(): string {
        if (this.currentStyle === PathStyles.UNIX) {
            return this.toUnixStyle(
                this._startsFromWorkSpaceHighestDirectoryPath
            );
        }
        return this.toWindowsStyle(
            this._startsFromWorkSpaceHighestDirectoryPath
        );
    }
    private set startsFromWorkSpaceHighestDirectoryPath(path: string) {
        const folders = workspace.workspaceFolders;
        if (folders === undefined) {
            this._startsFromWorkSpaceHighestDirectoryPath = path;
            return;
        }
        const rootFolderObj = folders.find(x => {
            return this.toUnixStyle(path).startsWith(
                this.toUnixStyle(x.uri.fsPath)
            );
        });
        if (rootFolderObj === undefined) {
            this._startsFromWorkSpaceHighestDirectoryPath = path;
            return;
        }
        this._startsFromWorkSpaceHighestDirectoryPath = join(
            rootFolderObj.name,
            this.toUnixStyle(path).replace(
                this.toUnixStyle(rootFolderObj.uri.fsPath),
                ""
            )
        );
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
        this._currentPathStartsFrom = this.config.defaultPathStartsFrom;
        this._currentStyle = this.config.defaultPathStyle;
        this._statusBarItem = window.createStatusBarItem(
            StatusBarAlignment.Left,
            this.config.priorityInStatusBar
        );
        this._statusBarItem.tooltip = "Open Menus";
        this._statusBarItem.command =
            "currentFilePath.executeQuickPickerAction";
        this.update();
    }

    private toUnixStyle(path: string): string {
        return path.replace(/\\/g, "/");
    }

    private toWindowsStyle(path: string): string {
        return path.replace(/\//g, "\\");
    }

    private updateStatusBar() {
        if (this.currentPathStartsFrom === PathStartsFrom.ROOT_DIRECTORY) {
            this.statusBarItem.text = this.startsFromRootDirectoryPath;
        } else {
            this.statusBarItem.text = this.startsFromWorkSpaceHighestDirectoryPath;
        }
    }

    public update() {
        const editor = window.activeTextEditor;
        if (!editor) {
            this.statusBarItem.hide();
            return;
        }

        this.startsFromRootDirectoryPath = editor.document.uri.fsPath;
        this.startsFromWorkSpaceHighestDirectoryPath =
            editor.document.uri.fsPath;
        this.name = basename(editor.document.uri.fsPath);

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
        this.currentPathStartsFrom = PathStartsFrom.ROOT_DIRECTORY;
        this.updateStatusBar();
    }

    public viewFromWorkSpaceRoot() {
        this.currentPathStartsFrom = PathStartsFrom.WORK_SPACE;
        this.updateStatusBar();
    }

    public async copy() {
        if (this.currentPathStartsFrom === PathStartsFrom.ROOT_DIRECTORY) {
            await clipboard.writeText(this.startsFromRootDirectoryPath);
            return;
        }
        await clipboard.writeText(this.startsFromWorkSpaceHighestDirectoryPath);
    }

    public async copyFileName() {
        await clipboard.writeText(this.name);
    }

    public async copyFileNameWithOutExtension() {
        await clipboard.writeText(this.name.slice(0, this.name.lastIndexOf(".")));
    }

    public openSettings() {
        commands.executeCommand('workbench.action.openSettings', '@ext:yoshinorin.current-file-path');
    }

    public executeQuickPickerAction() {
        this.quickPicker
            .getActionId(
                this.currentStyle,
                this.isWorkSpace,
                this.currentPathStartsFrom
            )
            .then(actionId => {
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
                    case QuickPickerAction.openSettings:
                        this.openSettings();
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
