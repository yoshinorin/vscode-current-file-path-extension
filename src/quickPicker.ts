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
                description: "View on Windows style path.",
                label: "Windows style",
            });
        } else {
            this._pickItems.push({
                id: QuickPickerAction.viewUnixStyle,
                description: "View on UNIX style path.",
                label: "UNIX style",
            });
        }

        if (isWorkSpace) {
            if (fromWorkSpaceOrNot) {
                this._pickItems.push({
                    id: QuickPickerAction.viewFromSystemRoot,
                    description: "View from root.",
                    label: "Absolute path",
                });
            } else {
                this._pickItems.push({
                    id: QuickPickerAction.viewFromWorkSpaceRoot,
                    description: "View from workspace root.",
                    label: "From workspace root",
                });
            }
        }

        this._pickItems.push({
            id: QuickPickerAction.copy,
            description: "Copy a current file path to clipboard.",
            label: "COPY",
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
