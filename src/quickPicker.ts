'use strict';

import { QuickPickItem, window } from 'vscode';

interface MenuQuickPickItem extends QuickPickItem {
    id: QuickPickerAction;
}

enum QuickPickerAction {
    viewUnixStyle,
    viewWindowsStyle,
    copy,
    openWithExplorer
}

export class QuickPicker {

    private _pickItems: MenuQuickPickItem[] = [];

    constructor() {
        this._pickItems.push({
            id: QuickPickerAction.viewUnixStyle,
            label: "UNIX style",
            detail: "View on UNIX style path.",
        });
        this._pickItems.push({
            id: QuickPickerAction.viewWindowsStyle,
            label: "Windows style",
            detail: "View on Windows style path.",
        });
        this._pickItems.push({
            id: QuickPickerAction.copy,
            label: "COPY",
            detail: "Copy a current file full path.",
        });
        this._pickItems.push({
            id: QuickPickerAction.openWithExplorer,
            label: "Open with Explorer",
            detail: "Open a current file with Explorer.",
        });
    }

    public show() {
        window.showQuickPick(this._pickItems);
    }

}
