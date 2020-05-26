import * as assert from 'assert';
import * as path from 'path';
import * as vscode from 'vscode';
const clipboardy = require("clipboardy");

describe('Copy features test', () => {

    before(async () => {
        const doc = await vscode.workspace.openTextDocument(path.resolve(__dirname, '../../../README.md'));
        await vscode.window.showTextDocument(doc);
    });

    it('copy file path command should copy file path when in the workspace', async () => {
        await vscode.commands.executeCommand('currentFilePath.copy');
        const text: string = clipboardy.readSync();
        // assert.strictEqual(text.startsWith(__dirname.replace(/\\/g, "/")), true);
        assert.strictEqual(text.endsWith('/README.md'), true);
    });

    it('copy filename command should copy filename when in the workspace', async () => {
        await vscode.commands.executeCommand('currentFilePath.copyFileName');
        assert.strictEqual(clipboardy.readSync(), 'README.md');
    });

    it('copy filename without extension command should copy filename without extension when in the workspace', async () => {
        await vscode.commands.executeCommand('currentFilePath.copyFileNameWithOutExtension');
        assert.strictEqual(clipboardy.readSync(), 'README');
    });

});
