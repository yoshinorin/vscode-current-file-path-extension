# Current File Path for Visual Studio Code

![](https://img.shields.io/badge/Release-v5.0.0-blue.svg?style=flat-square)
![](https://img.shields.io/badge/vscode-^1.102.0-blue.svg?style=flat-square)
[![CI](https://github.com/yoshinorin/vscode-current-file-path-extension/actions/workflows/ci.yaml/badge.svg)](https://github.com/yoshinorin/vscode-current-file-path-extension/actions/workflows/ci.yaml)

Visual Studio Code extension. This extension displays the current file path in the StatusBar, either as an absolute path (from the root directory) or relative to the workspace's top-level directory, in Unix or Windows style.

## Features

* Display a current file's path in the StatusBar.
    * Absolute (root directory) or starts from workspace highest directory
        * Configurable via settings.
        * Changeable via QuickPick or the command palette.
    * Path separator style can be either Unix or Windows.
        * Configurable via settings.
        * Changeable via QuickPick or the command palette.
* Copy a current file path to clipboard.
* Copy a current file name to clipboard.
* Support copy feature on the remote-host.
    * e.g. Remote-WSL, Remote-Linux
* Display priority in the StatusBar is configurable via settings.

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

* Visual Studio Code 1.102.0 later
* Linux will probably have to install [xsel](https://linux.die.net/man/1/xsel).
    * e.g.) Debian/Ubuntu `sudo apt install xsel`

## Release Notes

Please see [releases](https://github.com/yoshinorin/vscode-current-file-path-extension/releases).
