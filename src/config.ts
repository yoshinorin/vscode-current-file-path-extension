"use strict";

import { window, workspace } from "vscode";

export class Config {
    private readonly _config: any;

    private readonly _defaultPathStyle: string = "";
    public get defaultPathStyle(): string {
        return this._defaultPathStyle;
    }

    private readonly _priorityInStatusBar: number = 0;
    public get priorityInStatusBar(): number {
        return this._priorityInStatusBar;
    }

    private readonly _defaultPathStartsFrom: string = "";
    public get defaultPathStartsFrom(): string {
        return this._defaultPathStartsFrom;
    }

    constructor() {
        try {
            this._config = workspace.getConfiguration("currentFilePath");
            this._defaultPathStyle = this._config.defaultPathStyle;
            this._priorityInStatusBar = this._config.priorityInStatusBar;
            this._defaultPathStartsFrom = this._config.defaultPathStartsFrom;
        } catch (ex) {
            // @ts-ignore
            window.showErrorMessage(ex.message);
        }
    }
}
