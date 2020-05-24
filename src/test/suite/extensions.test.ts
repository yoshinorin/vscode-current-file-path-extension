import * as assert from 'assert';
import * as path from 'path';
import * as vscode from 'vscode';

import { CurrentFile } from '../../currentFile';
const clipboardy = require("clipboardy");

suite('Untitled File - Test Suite', () => {
    const currentFile = new CurrentFile();

    test('Copy', async () => {
        currentFile.copy();
        assert.strictEqual(clipboardy.readSync(), 'Untitled-1');

        currentFile.copyFileName();
        assert.strictEqual(clipboardy.readSync(), 'Untitled-1');

        currentFile.copyFileName();
        assert.strictEqual(clipboardy.readSync(), 'Untitled-1');
    });

});

suite('File copy in workspace - Test Suite', () => {

    test('Copy', async () => {
        const doc = await vscode.workspace.openTextDocument(path.resolve(__dirname, '../../../README.md'));
        await vscode.window.showTextDocument(doc);

        await vscode.commands.executeCommand('currentFilePath.copy');
        const text: string = clipboardy.readSync();

        // assert.strictEqual(text.startsWith(__dirname.replace(/\\/g, "/")), true);
        assert.strictEqual(text.endsWith('/README.md'), true);

        await vscode.commands.executeCommand('currentFilePath.copyFileName');
        assert.strictEqual(clipboardy.readSync(), 'README.md');

        await vscode.commands.executeCommand('currentFilePath.copyFileNameWithOutExtension');
        assert.strictEqual(clipboardy.readSync(), 'README');
    });
});
