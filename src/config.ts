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

    private readonly _fromWorkSpaceOrNot: boolean = false;
    public get fromWorkSpaceOrNot(): boolean {
        return this._fromWorkSpaceOrNot;
    }

    constructor() {
        try {
            this._config = workspace.getConfiguration("currentFilePath");
            this._defaultPathStyle = this._config.defaultPathStyle;
            this._priorityInStatusBar = this._config.priorityInStatusBar;
            this._fromWorkSpaceOrNot = this._config.fromWorkSpaceOrNot;
        } catch (ex) {
            window.showErrorMessage(ex.message);
        }
    }

}
