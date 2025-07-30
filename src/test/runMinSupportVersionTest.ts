import * as path from "path";
import { runTests, downloadAndUnzipVSCode } from "@vscode/test-electron";

async function main() {
  const extensionDevelopmentPath = path.resolve(__dirname, "../../");
  const extensionTestsPath = path.resolve(__dirname, "./suite/index");

  // https://github.com/microsoft/vscode/issues/86382
  const tmpDir = path.resolve(__dirname, "..", "../testTmp");

  // v1.102.0 test
  const vscodeExecutablePath = await downloadAndUnzipVSCode("1.102.0");
  try {
    await runTests({
      vscodeExecutablePath,
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: ["--user-data-dir", tmpDir, "--disable-extensions"],
    });
  } catch (err) {
    console.log(err);
    console.error("Failed to run tests");
    process.exit(1);
  }
}

main();
