import * as assert from "assert";
import * as path from "path";
import * as vscode from "vscode";
import { CurrentFile } from "../../currentFile";
const clipboard = vscode.env.clipboard;

describe("Default config test", () => {
  before(async () => {
    const doc = await vscode.workspace.openTextDocument(
      path.resolve(__dirname, "../../../README.md"),
    );
    await vscode.window.showTextDocument(doc);
  });

  const config = vscode.workspace.getConfiguration("currentFilePath");
  const currentFile = new CurrentFile();

  it("defaultPathStyle setting is same with workSpace setting", async () => {
    //@ts-ignore
    // execute private method
    assert.strictEqual(
      config.get("defaultPathStyle"),
      currentFile.config.defaultPathStyle,
    );
  });

  it("priorityInStatusBar setting is same with workSpace setting", async () => {
    //@ts-ignore
    // execute private method
    assert.strictEqual(
      config.get("priorityInStatusBar"),
      currentFile.config.priorityInStatusBar,
    );
  });

  it("defaultPathStartsFrom setting is same with workSpace setting", async () => {
    //@ts-ignore
    // execute private method
    assert.strictEqual(
      config.get("defaultPathStartsFrom"),
      currentFile.config.defaultPathStartsFrom,
    );
  });
});

describe("Copy features test", () => {
  before(async () => {
    const doc = await vscode.workspace.openTextDocument(
      path.resolve(__dirname, "../../../README.md"),
    );
    await vscode.window.showTextDocument(doc);
  });

  it("copy file path command should copy file path when in the workspace", async () => {
    vscode.commands.executeCommand("currentFilePath.copy").then(async () => {
      const text: any = await clipboard.readText();
      console.log(await clipboard.readText());
      // assert.strictEqual(text.startsWith(__dirname.replace(/\\/g, "/")), true);
      assert.strictEqual(text.endsWith("/README.md"), true);
    });
  });

  it("copy filename command should copy filename when in the workspace", async () => {
    await vscode.commands.executeCommand("currentFilePath.copyFileName");
    assert.strictEqual(await clipboard.readText(), "README.md");
  });
});

describe("Change path style featuer test", () => {
  before(async () => {
    const doc = await vscode.workspace.openTextDocument(
      path.resolve(__dirname, "../../../README.md"),
    );
    await vscode.window.showTextDocument(doc);
  });

  it("path style should be windows style: unix -> windows", async () => {
    await vscode.commands.executeCommand("currentFilePath.viewFromSystemRoot");
    await vscode.commands.executeCommand("currentFilePath.copy");
    const unixStyleString: string = await clipboard.readText();
    assert.strictEqual(
      unixStyleString,
      path.join(__dirname, "../../../README.md").replace(/\\/g, "/"),
    );

    await vscode.commands.executeCommand("currentFilePath.viewWindowsStyle");
    await vscode.commands.executeCommand("currentFilePath.copy");
    const winStyleString: string = await clipboard.readText();
    assert.strictEqual(
      winStyleString,
      path.join(__dirname, "../../../README.md").replace(/\//g, "\\"),
    );
  });

  it("path style should be unix style: windows -> unix", async () => {
    await vscode.commands.executeCommand("currentFilePath.viewWindowsStyle");
    await vscode.commands.executeCommand("currentFilePath.copy");
    const winStyleString: string = await clipboard.readText();
    assert.strictEqual(
      winStyleString,
      path.join(__dirname, "../../../README.md").replace(/\//g, "\\"),
    );

    await vscode.commands.executeCommand("currentFilePath.viewUnixStyle");
    await vscode.commands.executeCommand("currentFilePath.copy");
    const unixStyleString: string = await clipboard.readText();
    assert.strictEqual(
      unixStyleString,
      path.join(__dirname, "../../../README.md").replace(/\\/g, "/"),
    );
  });
});
