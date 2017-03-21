
一邊看121分鐘的影片[Learn Redux from its creator:Dan Abramov](https://egghead.io/courses/getting-started-with-redux)，一邊閱讀文件
[Redux](http://redux.js.org/)裡面的Introduction與Basics兩章，利用Create-React-App實作本專案。

步驟如下：
1. `create-react-app react-redux-practice` 產生子目錄 react-redux-practice，內含專案的安裝結果。
2. `cd react-redux-practice`
3. `npm start` 開啟server，透過網址 http://localhost:3000 看專案的成果。
3. `npm test` 執行 unit test
3. `npm install redux react-redux --save`
5. 將 App.js, App.test.js, index.js 分別改名成 App.orig.js, App.orig.test.js, index.orig.js
6. 將 App.orig.test.js 的 `import App from './App'` 改成 `import App from './App.orig'`。
1. 實作子目錄 actions, reducers, 與測試檔 reducers.test.js, 用 `npm test`進行測試
1. 實作子目錄 components, containers 與 index.js 檔案。
1. 用 `npm start` 開啟server，透過網址 http://localhost:3000 執行程式。
