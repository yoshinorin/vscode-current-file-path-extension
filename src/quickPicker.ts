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
    viewFromSystemRoot,
    viewFromWorkSpaceRoot,
    copy
}

export class QuickPicker {

    private _pickItems: MenuQuickPickItem[] = [];

    constructor() {

    }

    public async getActionId(currentStyle: string, isWorkSpace: boolean, fromWorkSpaceOrNot: boolean): Promise<Number> {

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

        if (isWorkSpace) {
            if (fromWorkSpaceOrNot) {
                this._pickItems.push({
                    id: QuickPickerAction.viewFromSystemRoot,
                    label: "From system root",
                    detail: "View from system root path.",
                });
            } else {
                this._pickItems.push({
                    id: QuickPickerAction.viewFromWorkSpaceRoot,
                    label: "From workspace root",
                    detail: "View from workspace root path.",
                });
            }
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
