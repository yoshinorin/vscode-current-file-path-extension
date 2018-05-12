'use strict';

import { window, workspace } from 'vscode';

export class Config {

    private readonly _config : any;

    private readonly _defaultPathStyle : string = "";
    public get defaultPathStyle() : string {
        return this._defaultPathStyle;
    }

    private readonly _priorityInStatusBar: number = 0;
    public get priorityInStatusBar() : number {
        return this._priorityInStatusBar;
    }

    constructor() {
        try {
            this._config = workspace.getConfiguration("absolutePath");
            this._defaultPathStyle = this._config.defaultPathStyle;
            this._priorityInStatusBar = this._config.priorityInStatusBar;
        } catch (ex) {
            window.showErrorMessage(ex.message);
        }
    }

}
