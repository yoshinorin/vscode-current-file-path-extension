'use strict';

import { QuickPickItem, window } from 'vscode';

export class QuickPicker {

    private _pickItems: QuickPickItem[] = [];

    constructor() {
        this._pickItems.push({
            label: "UNIX style",
            detail: "View on UNIX style path.",
        });
        this._pickItems.push({
            label: "Windows style",
            detail: "View on Windows style path.",
        });
        this._pickItems.push({
            label: "COPY",
            detail: "Copy a current file full path.",
        });
        this._pickItems.push({
            label: "Open with Explorer",
            detail: "Open a current file with Explorer.",
        });
    }

    public show() {
        window.showQuickPick(this._pickItems);
    }

}
