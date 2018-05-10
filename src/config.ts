'use strict';

import { window, workspace } from 'vscode';

export class Config {

    private _config : any;

    private _defaultPathStyle : string = "";
    public get defaultPathStyle() : string {
        return this._defaultPathStyle;
    }

    constructor() {
        try {
            this._config = workspace.getConfiguration("absolutePath");
            this._defaultPathStyle = this._config.defaultPathStyle;
        } catch (ex) {
            window.showErrorMessage(ex.message);
        }
    }

}
