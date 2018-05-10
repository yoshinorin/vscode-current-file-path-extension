'use strict';

import { QuickPickItem, window } from 'vscode';
import { PathStyles } from './utils/pathStyles';

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

    }

    public async getActionId(currentStyle: string): Promise<Number> {

        this._pickItems = [];

        if (currentStyle === PathStyles.UNIX) {
            this._pickItems.push({
                id: QuickPickerAction.viewWindowsStyle,
                label: "Windows style",
                detail: "View on Windows style path.",
            });
        } else {
            this._pickItems.push({
                id: QuickPickerAction.viewUnixStyle,
                label: "UNIX style",
                detail: "View on UNIX style path.",
            });
        }

        this._pickItems.push({
            id: QuickPickerAction.copy,
            label: "COPY",
            detail: "Copy a current file full path.",
        });

       let selectedAction = await window.showQuickPick(this._pickItems, {
           placeHolder: "Select Menu"
       });

       if (!selectedAction) {
           return QuickPickerAction.noAction;
       }

       return selectedAction.id;
    }

}
