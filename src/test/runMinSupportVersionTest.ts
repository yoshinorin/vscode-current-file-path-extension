import * as path from 'path';
import {
    runTests,
    downloadAndUnzipVSCode
} from '@vscode/test-electron';

async function main() {
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');
    const extensionTestsPath = path.resolve(__dirname, './suite/index');

    // v1.45.0 test
    const vscodeExecutablePath = await downloadAndUnzipVSCode('1.45.0');
    try {
        await runTests({
            vscodeExecutablePath,
            extensionDevelopmentPath,
            extensionTestsPath,
            launchArgs: ['--disable-extensions']
        });
    } catch (err) {
        console.log(err);
        console.error('Failed to run tests');
        process.exit(1);
    }
}

main();
