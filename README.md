# Current File Path for Visual Studio Code

![](https://img.shields.io/badge/Release-v3.1.0-blue.svg?style=flat-square)
![](https://img.shields.io/badge/vscode-^1.70.0-blue.svg?style=flat-square)
[![CI](https://github.com/yoshinorin/vscode-current-file-path-extension/actions/workflows/ci.yaml/badge.svg)](https://github.com/yoshinorin/vscode-current-file-path-extension/actions/workflows/ci.yaml)

Visual Studio Code extension. This extension displays a current file path from absolute (root directory) or workspace highest directory in StatusBar by Unix style or Windows style.

## Features

* Display a current file's path in the StatusBar.
    * Absolute (root directory) or starts from workspace highest directory
        * You can select which to use by settings.
        * You can change the path appearance with QuickPick or command palette.
    * Path separator style can choose Unix or Windows.
        * You can select which to use by settings.
        * You can change it with QuickPick or command palette.
* Copy a current file path to clipboard.
* Copy a current file name to clipboard.
* Support copy feature on the remote-host.
    * e.g. Remote-WSL, Remote-Linux
* You can set a display priority in the StatusBar by setting.

## Images

![](https://raw.githubusercontent.com/yoshinorin/vscode-current-file-path-extension/master/images/image.gif)

**Command Palette**

![](https://raw.githubusercontent.com/yoshinorin/vscode-current-file-path-extension/master/images/command-palette.png)

## Extension Settings

|Property|Description|value|Default|
|---|---|---|---|
|`currentFilePath.defaultPathStyle`|Specify default path style. Unix like or Windows like.|`unix` <br> `windows`|`unix`|
|`currentFilePath.priorityInStatusBar`|The priority in the statusBar. Higher values shown more to the left.| `0` ~ max int |`0`|
|`currentFilePath.defaultPathStartsFrom`|Default value of where the path is displayed starts from. Root directory or workspace highest directory.|`rootDirectory` <br> `workSpace`|`rootDirectory`|

## Requirements

* Visual Studio Code 1.40.0 later
* Linux will probably have to install [xsel](https://linux.die.net/man/1/xsel).
    * e.g.) Debian/Ubuntu `sudo apt install xsel`

## Release Notes

### v3.1.0
---

#### New features

* (refs [#151](https://github.com/yoshinorin/vscode-current-file-path-extension/pull/151)): Support copy feature on the remote-host [@dlguswo333](https://github.com/dlguswo333)
    * e.g. Remote-WSL, Remote-Linux
    * replace `clipboardy` with `vscode.env.clipboard`

#### Misc

* [f735692](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/f735692fd2ae51f8c317664716c86a731e501b41): update some devDependencies

### v3.0.0
---

#### Breaking change

* [6664105](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/66641059a8263cf4d9d70986b5f424d65b6d5f38): Bump min support VSCode version from `1.18.0` to `1.40.0`

#### New features

* [5811830](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/58118304a2a068b69fa544b3268bee578615f0fb): Add open extension settings

#### Misc

* (refs [#144](https://github.com/yoshinorin/vscode-current-file-path-extension/pull/144)), [f56d3fde](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/f56d3fde4855902d8f54aefd4a10e4f62d8c90b7), [339b2400](https://github.com/yoshinorin/vscode-current-file-path-extension/commit/339b240067e161b292da25160a4223278539a313): Add unit test
* (refs [#143](https://github.com/yoshinorin/vscode-current-file-path-extension/pull/143)): Add CI (GitHub Action)
* Update some dependencies


### v2.0.0
---

#### Breaking change

`fromWorkSpaceOrNot` setting changed to `defaultPathStartsFrom`. Please change your setting if use.

#### New feature

* (refs [#16](https://github.com/yoshinorin/vscode-current-file-path-extension/issues/16)) All action callable from command palette.
* (refs [#19](https://github.com/yoshinorin/vscode-current-file-path-extension/issues/19)) Implement copy file name feature.

#### Bug fix

* (refs [#21](https://github.com/yoshinorin/vscode-current-file-path-extension/issues/21)) Can not get correct each root folder path if workspace has some folders.

#### Others

* Change some UI
* Improve wording

### v1.0.0
---

* Initial release
