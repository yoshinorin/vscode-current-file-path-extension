'use strict';

import { window, workspace } from 'vscode';

export class Config {

    private _config : any;

    private _pathType : string = "";
    public get pathType() : string {
        return this._pathType;
    }

    public SelectablePathType = {
        UNIX: "unix",
        WINDOWS: "windows",
    }

    constructor() {
        try {
            this._config = workspace.getConfiguration("absolutepath");
            this._pathType = this._config._pathType;
        } catch (ex) {
            window.showErrorMessage(ex.message);
        }
    }

}
