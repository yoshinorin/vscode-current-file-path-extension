# Current File Path

![](https://img.shields.io/badge/Release-v2.0.0-blue.svg?style=flat-square)
![](https://img.shields.io/badge/vscode-^1.18.0-blue.svg?style=flat-square)

Visual Studio Code extension. This extension display current file's path from absolute (root directory) or workspace highest directory in StatusBar by Unix style or Windows style.

## Features

* Display a current file's path in the StatusBar.
    * Absolute (root directory) or starts from workspace highest directory
        * Can select which to use by settings.
        * Can change shown using by QuickPick or command palette.
    * Path separator style can choose Unix or Windows.
        * Can select which to use by settings.
        * Can change shown using by QuickPick or command palette.
* Copy a current file path to clipboard.
* Copy a current file name to clipboard.
* Can set display priority in the StatusBar by setting.

## Images

![](https://raw.githubusercontent.com/YoshinoriN/vscode-current-file-path-extension/master/images/image.gif)

**Command Palette**

![](https://raw.githubusercontent.com/YoshinoriN/vscode-current-file-path-extension/master/images/command-palette.png)

## Extension Settings

|Property|Description|value|Default|
|---|---|---|---|
|`currentFilePath.defaultPathStyle`|Specify default path style. Unix like or Windows like.|`unix` <br> `windows`|`unix`|
|`currentFilePath.priorityInStatusBar`|The priority in the statusBar. Higher values shown more to the left.| `0` ~ max int |`0`|
|`currentFilePath.defaultPathStartsFrom`|Default value of where the path is displayed starts from. Root directory or workspace highest directory.|`rootDirectory` <br> `workSpace`|`rootDirectory`|

## Requirements

* Visual Studio Code 1.18.0 later
* Linux will probably have to install [xsel](https://linux.die.net/man/1/xsel).
    * e.g.) Debian/Ubuntu `sudo apt install xsel`

## Release Notes

### v2.0.0
---

#### Breaking change

`fromWorkSpaceOrNot` setting changed to `defaultPathStartsFrom`. Please change your setting if use.

#### New feature

* (refs [#16](https://github.com/YoshinoriN/vscode-current-file-path-extension/issues/16)) All action callable from command palette.
* (refs [#19](https://github.com/YoshinoriN/vscode-current-file-path-extension/issues/19)) Implement copy file name feature.

#### Bug fix

* (refs [#21](https://github.com/YoshinoriN/vscode-current-file-path-extension/issues/21)) Can not get correct each root folder path if workspace has some folders.

#### Others

* Change some UI
* Improve wording

### v1.0.0
---

* Initial release
