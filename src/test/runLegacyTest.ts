
/*
import * as path from 'path';
import {
    runTests,
    downloadAndUnzipVSCode
} from 'vscode-test';

async function main() {
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');
    const extensionTestsPath = path.resolve(__dirname, './suite/index');

    // legacy version test
    // v1.18.0 -> NG: ENOENT error
    // v1.30.0 -> NG: vscode process does not exit
    // v1.35.0 -> NG: vscode process does not exit
    const vscodeExecutablePath = await downloadAndUnzipVSCode('1.40.0');
    try {
        await runTests({
            vscodeExecutablePath,
            extensionDevelopmentPath,
            extensionTestsPath,
            launchArgs: ['--disable-extensions']
        });
    } catch (err) {
        console.error('Failed to run tests');
        process.exit(1);
    }
}

main();
*/
