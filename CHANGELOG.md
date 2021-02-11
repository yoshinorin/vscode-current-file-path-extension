# Change Log

## v3.1.0 - 2021-02-11

### New features

* (refs [#151](https://github.com/YoshinoriN/vscode-current-file-path-extension/pull/151)): Support copy feature on the remote-host [@dlguswo333](https://github.com/dlguswo333)
    * e.g. Remote-WSL, Remote-Linux
    * replace `clipboardy` with `vscode.env.clipboard`

### Misc

* [f735692](https://github.com/YoshinoriN/vscode-current-file-path-extension/commit/f735692fd2ae51f8c317664716c86a731e501b41): update some devDependencies

## v3.0.0 - 2020-05-29

### Breaking change

* [6664105](https://github.com/YoshinoriN/vscode-current-file-path-extension/commit/66641059a8263cf4d9d70986b5f424d65b6d5f38): Bump min support VSCode version from `1.18.0` to `1.40.0`

### New features

* [5811830](https://github.com/YoshinoriN/vscode-current-file-path-extension/commit/58118304a2a068b69fa544b3268bee578615f0fb): Add open extension settings

### Misc

* (refs [#144](https://github.com/YoshinoriN/vscode-current-file-path-extension/pull/144)), [f56d3fde](https://github.com/YoshinoriN/vscode-current-file-path-extension/commit/f56d3fde4855902d8f54aefd4a10e4f62d8c90b7), [339b2400](https://github.com/YoshinoriN/vscode-current-file-path-extension/commit/339b240067e161b292da25160a4223278539a313): Add unit test
* (refs [#143](https://github.com/YoshinoriN/vscode-current-file-path-extension/pull/143)): Add CI (GitHub Action)
* Update some dependencies

## v2.0.0 - 2018-09-04

### Breaking change

`fromWorkSpaceOrNot` setting changed to `defaultPathStartsFrom`. Please change your setting if use.

### New feature

* (refs [#16](https://github.com/YoshinoriN/vscode-current-file-path-extension/issues/16)) All action callable from command palette.
* (refs [#19](https://github.com/YoshinoriN/vscode-current-file-path-extension/issues/19)) Implement copy file name feature.

### Bug fix

* (refs [#21](https://github.com/YoshinoriN/vscode-current-file-path-extension/issues/21)) Can not get correct each root folder path if workspace has some folders.

### Others

* Change some UI
* Improve wording

## v1.0.0 - 2018-05-16

* Initial release
