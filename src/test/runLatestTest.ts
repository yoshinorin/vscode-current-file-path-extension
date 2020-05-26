import * as path from 'path';
import {
    runTests
} from 'vscode-test';

async function main() {
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');
    const extensionTestsPath = path.resolve(__dirname, './suite/index');

    // latest version test
    try {
        await runTests({
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
