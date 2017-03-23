實作 [Async Actions](http://redux.js.org/docs/advanced/AsyncActions.html)

參考[Create-react-app Debugging in Editor](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-in-the-editor) 與 [Debugging in VSCode](https://code.visualstudio.com/docs/editor/debugging)
增加create-react-app 與 VSCode編輯器搭配時特有的debug功能。
```
Visual Studio Code supports live-editing and debugging out of the box with Create React App.
```

1. 首先VSCode要安裝Debugger for Chrome，接著在專案的.vscode\lauch.json 增加一個Debug設定如下：
```
    {
      "name": "Chrome create-react-app",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "userDataDir": "${workspaceRoot}/.vscode/chrome",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
2. yarn start 啟動程式
3. 在Debug Side Bar 上端選定`Chrome create-react-app`後按啟動除錯鈕，開始除錯。奇怪的是，必須再按除錯工具列上的restart鈕，中斷點的功能才會生效。
```