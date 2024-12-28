import { ExtensionContext, commands } from "vscode";
import { CurrentFile } from "./currentFile";
import { EditorChangeListner } from "./editorChangeListner";

export function activate(context: ExtensionContext) {
  const currentFile = new CurrentFile();
  const listner = new EditorChangeListner(currentFile);

  const disposableCommands = [
    commands.registerCommand("currentFilePath.executeQuickPickerAction", () => {
      currentFile.executeQuickPickerAction();
    }),
    commands.registerCommand("currentFilePath.viewUnixStyle", () => {
      currentFile.viewUnixStyle();
    }),
    commands.registerCommand("currentFilePath.viewWindowsStyle", () => {
      currentFile.viewWindowsStyle();
    }),
    commands.registerCommand("currentFilePath.viewFromSystemRoot", () => {
      currentFile.viewFromSystemRoot();
    }),
    commands.registerCommand("currentFilePath.viewFromWorkSpaceRoot", () => {
      currentFile.viewFromWorkSpaceRoot();
    }),
    commands.registerCommand("currentFilePath.copy", () => {
      currentFile.copy();
    }),
    commands.registerCommand("currentFilePath.copyFileName", () => {
      currentFile.copyFileName();
    }),
    commands.registerCommand(
      "currentFilePath.copyFileNameWithOutExtension",
      () => {
        currentFile.copyFileNameWithOutExtension();
      },
    ),
    commands.registerCommand("currentFilePath.openSettings", () => {
      currentFile.openSettings();
    }),
  ];

  disposableCommands.forEach((command) => {
    context.subscriptions.push(command);
  });
  context.subscriptions.push(listner);
  context.subscriptions.push(currentFile);
}

export function deactivate() {
  // Nothing to do
}
