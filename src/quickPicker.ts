'use strict';

import { QuickPickItem, window } from 'vscode';

interface MenuQuickPickItem extends QuickPickItem {
    id: QuickPickerAction;
}

export enum QuickPickerAction {
    noAction,
    viewUnixStyle,
    viewWindowsStyle,
    copy
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
    }

    public async getActionId(): Promise<Number> {
       let selectedAction = await window.showQuickPick(this._pickItems, {
           placeHolder: "Select Menu"
       });

       if (!selectedAction) {
           return QuickPickerAction.noAction;
       }

       return selectedAction.id;
    }

}
