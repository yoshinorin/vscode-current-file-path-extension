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

TODO

## Extension Settings

|Property|Description|Default|
|---|---|---|
|`absolutePath.defaultPathStyle`|Specify default path style. Unix like or Windows like.|`unix`|
|`absolutePath.priorityInStatusBar`|The priority in the statusBar. Higher values shown more to the left.|`0`|
|`absolutePath.isFromWorkSpaceRoot`|Shown from workspace root path or not.|`false`|

## Requirements

* Visual Studio Code x.x.x later

## Release Notes

### 1.0.0

* Initial release
