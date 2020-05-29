"use strict";

import { QuickPickItem, window } from "vscode";
import { PathStyles, PathStartsFrom } from "./utils/types";

interface MenuQuickPickItem extends QuickPickItem {
    id: QuickPickerAction;
}

export enum QuickPickerAction {
    noAction,
    viewUnixStyle,
    viewWindowsStyle,
    viewFromSystemRoot,
    viewFromWorkSpaceRoot,
    copy,
    copyFileName,
    copyFileNameWithOutExtension,
    openSettings
}

export class QuickPicker {
    private _pickItems: MenuQuickPickItem[] = [];

    constructor() {}

    public async getActionId(
        currentStyle: string,
        isWorkSpace: boolean,
        pathStartsFrom: string
    ): Promise<Number> {
        this._pickItems = [];

        if (currentStyle === PathStyles.UNIX) {
            this._pickItems.push({
                id: QuickPickerAction.viewWindowsStyle,
                description: "",
                label: "Path separator: Windows style",
                detail: "View on Windows style path"
            });
        } else {
            this._pickItems.push({
                id: QuickPickerAction.viewUnixStyle,
                description: "",
                label: "Path separator: UNIX style",
                detail: "View on UNIX style path"
            });
        }

        if (isWorkSpace) {
            if (pathStartsFrom === PathStartsFrom.WORK_SPACE) {
                this._pickItems.push({
                    id: QuickPickerAction.viewFromSystemRoot,
                    description: "",
                    label: "Path starts from: Root",
                    detail: "View from root directory"
                });
            } else {
                this._pickItems.push({
                    id: QuickPickerAction.viewFromWorkSpaceRoot,
                    description: "",
                    label: "Path starts from: WorkSpace",
                    detail: "View from workspace highest directory"
                });
            }
        }

        this._pickItems.push({
            id: QuickPickerAction.copy,
            description: "Copy a current file path to clipboard.",
            label: "COPY: Path"
        });

        this._pickItems.push({
            id: QuickPickerAction.copyFileName,
            description: "Copy a current file name to clipboard.",
            label: "COPY: FileName"
        });

        this._pickItems.push({
            id: QuickPickerAction.copyFileNameWithOutExtension,
            description:
                "Copy a current file name (without extension) to clipboard.",
            label: "COPY: FileName without extension"
        });

        this._pickItems.push({
            id: QuickPickerAction.openSettings,
            label: "Settings: Open Extension Settings"
        });


        let selectedAction = await window.showQuickPick(this._pickItems, {
            placeHolder: "Select"
        });

        if (!selectedAction) {
            return QuickPickerAction.noAction;
        }

        return selectedAction.id;
    }
}
