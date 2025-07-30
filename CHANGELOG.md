# Change Log

## v5.0.0 - 2025-07-30

### Breaking Changes

* [533e32e](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/533e32e9d6f014344dcb5036949044db2c937c1a) Require VSCode 1.102.0+

### Othres

* [63765a5](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/63765a52f6d06f3618487dfbb86838217be8b5c5) reduce package size

## v4.1.0 - 2024-03-16

### Perf

* [b301697](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/b301697) refactor: use `onStartupFinished` for activate extention event

### Others

* [097d8b9](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/097d8b9) docs: update LICENSE year
* [03db2f9](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/03db2f9) docs: update images
* [eb18992](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/eb18992) chore: require `npm+10`
* [80f41f6](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/80f41f6) chore: require `node+20`
* [3d5ffbb](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/3d5ffbb) chore: replace `tab` to `space2` in `package.json`
* [88fe063](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/88fe063) ci: update actions
* [ee4e074](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/ee4e074) chore(deps): bump `@vscode/vsce` and `@vscode/test-electron`
* [9048839](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/9048839) ci: ignore `fail-fast`
* [a400bc5](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/a400bc5) chore: delete unnecessary file
* [691f3de](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/691f3de) test: change `mocha` default timeout
* [fd9a8e1](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/fd9a8e1) chore(deps): update dependencies
* [23a31c9](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/23a31c9) chore(deps): bump `blob` from `8.0.3` to `10.3.10`

## v4.0.0 - 2023-05-05

### Breaking Changes

* Require VSCode 1.70+
  * [7eed663](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/7eed663) chore: require 1.70+ follow-up 1db4c3567c42a303dd6f306b796cf6b23523c3dc
  * [1db4c35](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/1db4c35) chore: require v1.70.0+

### Othres

Refactor & Cleanups. Nothing, new features, bug fixes.

* [430827f](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/430827f) docs: delete release details in `README`
* [0098057](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/0098057) chore(deps): `@vscode/test-electron` move from `dependencies` to `devDependencies`
* [858764d](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/858764d) refactor: use `@vscode/vsce` instead of `vsce`
* [8f092f2](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/8f092f2) chore(deps): fixed package versions
* [aa551bd](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/aa551bd) refactor: delete `use strict`
* [5852060](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/5852060) chore: reformat `package.json`
* [bf1476c](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/bf1476c) test: workaround for MacOS test issue
* [c33cd06](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/c33cd06) test: use `@vscode/test-electron` instead of `vscode-test`
* [065901b](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/065901b) test: put stacktrace when test failed
* [05978c4](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/05978c4) test: rename test file and its task
* [ecebcc5](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/ecebcc5) fix: error change in a2c92cb18f93459e61e2fc40dc4101637cb1195e
* [305908d](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/305908d) refactor: clean up `eslint` and `prettier`
* [a2c92cb](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/a2c92cb) refactor: `requrie` to `import`
* [9e60d4b](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/9e60d4b) refactor: use `number` instead of `Number`
* [7693cba](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/7693cba) refactor: explicity nothing todo
* [16f3399](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/16f3399) refactor: use `const` instead of `let`
* [448fb65](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/448fb65) test: drop regacy legacy version test
* [d26c95d](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/d26c95d) chore(ci): migrate GitHub Actions
* [f4e2156](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/f4e2156) chore(deps): update devDependencies
* [5ce42f5](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/5ce42f5) docs: update badge
* [d7aaa10](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/d7aaa10) chore(ci): add node.js 18.x matrix buil
* [e04664d](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/e04664d) chore(ci): update GitHub Actions
* [f4855e3](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/f4855e3) chore: delete `__metadata` from `package.json`
* [8e6adf4](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/8e6adf4) require: node.js 16+
* [7d6ddff](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/7d6ddff) chore: require `npm8+` & `node14+`
* [138edd3](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/138edd3) chore: tab to space
* [c83ca68](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/c83ca68) chore(deps): update dependencies for vscode
* [b102121](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/b102121) chore(deps): update dependencies
* [a02e5c0](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/a02e5c0) chore: update .vscodeignore
* [f5a2ba2](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/f5a2ba2) chore: ts-ignore
* [bd299fb](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/bd299fb) chore(deps): update dependencies
* [9069e35](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/9069e35) chore: require npm +7
* [e93f9c5](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/e93f9c5) chore: update LICENSE year
* [8d923d0](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/8d923d0) chore: uppercase to lowercase
* [9e09082](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/9e09082) chore(deps): update some devDependencies
* [454a150](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/454a150) chore: bump engine from node 10.x to 12.x

## v3.1.0 - 2021-02-11

### New features

* (refs [#151](https://github.com/yoshinorin/vscode-current-file-path-extension/pull/151)): Support copy feature on the remote-host [@dlguswo333](https://github.com/dlguswo333)
    * e.g. Remote-WSL, Remote-Linux
    * replace `clipboardy` with `vscode.env.clipboard`

### Misc

* [f735692](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/f735692fd2ae51f8c317664716c86a731e501b41): update some devDependencies

## v3.0.0 - 2020-05-29

### Breaking change

* [6664105](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/66641059a8263cf4d9d70986b5f424d65b6d5f38): Bump min support VSCode version from `1.18.0` to `1.40.0`

### New features

* [5811830](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/58118304a2a068b69fa544b3268bee578615f0fb): Add open extension settings

### Misc

* (refs [#144](https://github.com/yoshinorin/vscode-current-file-path-extension/pull/144)), [f56d3fde](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/f56d3fde4855902d8f54aefd4a10e4f62d8c90b7), [339b2400](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/339b240067e161b292da25160a4223278539a313): Add unit test
* (refs [#143](https://github.com/yoshinorin/vscode-current-file-path-extension/pull/143)): Add CI (GitHub Action)
* Update some dependencies

## v2.0.0 - 2018-09-04

### Breaking change

`fromWorkSpaceOrNot` setting changed to `defaultPathStartsFrom`. Please change your setting if use.

### New feature

* (refs [#16](https://github.com/yoshinorin/vscode-current-file-path-extension/issues/16)) All action callable from command palette.
* (refs [#19](https://github.com/yoshinorin/vscode-current-file-path-extension/issues/19)) Implement copy file name feature.

### Bug fix

* (refs [#21](https://github.com/yoshinorin/vscode-current-file-path-extension/issues/21)) Can not get correct each root folder path if workspace has some folders.

### Others

* Change some UI
* Improve wording

## v1.0.0 - 2018-05-16

* Initial release
