# Absolute Path

This extension display current file's path (from absolute or workspace root path) in StatusBar by Unix style or Windows style.

## Features

* Display a current file's path in the StatusBar.
    * From absolute or workspace root.
        * Can set which to use by settings.
        * Can change shown using by QuickPick.
    * Can select Unix or Windows style.
        * Can set which to use by settings.
        * Can change shown using by QuickPick.
* Copy a current file path to clipboard.
* Can set display priority in the StatusBar by setting.

## Images

![](https://raw.githubusercontent.com/YoshinoriN/vscode-absolute-path/master/images/image.gif)

## Extension Settings

|Property|Description|Default|
|---|---|---|
|`absolutePath.defaultPathStyle`|Specify default path style. Unix like or Windows like.|`unix`|
|`absolutePath.priorityInStatusBar`|The priority in the statusBar. Higher values shown more to the left.|`0`|
|`absolutePath.isFromWorkSpaceRoot`|Shown from workspace root path or not.|`false`|

## Requirements

* Visual Studio Code 1.18.0 later
* Linux will probably have to install [xsel](https://linux.die.net/man/1/xsel). For example `sudo apt install xsel`

## Release Notes

### v1.0.0

* Initial release
