# Webpack

bases on [https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/](https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/)

## Setup

* `npm init -y`
* `npm install webpack --save-dev`
* `md src`
* 編輯 index.html, webpack.config.js, src/app.js

重要：將所有需要編輯的檔案集中放到src子目錄裡，方便 webpack.config 的設定。

注：`webpack --watch` 會動態察覺檔案的變動而及時重新編譯。

## modules
#### lodash 模組
lodash 可以整理資料

#### 抽出模組
利用import的功能讓程式碼清晰。

## Loaders
style-loader, css-loader, sass-loader,node-sass(?),url-loader,file-loader(?)

下面webpack.config的設定會將.scss的檔案，先由sass-loader的翻譯，接著css-loader翻譯，最後style-loader翻譯。(node-sass的腳色？)
```
rules: [{
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
  }, {
  // ...
}]
```
* sass-loader transforms Sass into CSS.
* css-loader parses the CSS into JavaScript and resolves any dependencies.
* style-loader outputs our CSS into a &lt;style> tag in the document.

```
rules: [{
  test: /\.(png|jpg)$/,
  use: [{
    loader: 'url-loader',
    options: { limit: 10000 } // Convert images < 10k to base64 strings
  }]
  }, {
  // ...
}]
```
## plugins
#### Common Code
webpack.config裡面
```
const webpack = require('webpack')
const path = require('path')
const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'commons.js'
})

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js',
    admin: './admin.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    // ...
  },
  plugins: [
    extractCommons
  ]
}
module.exports = config
```
會產生3個 js bundle：app.bundle.js, admin.bundle.js, commons.js。其中的commons.js由extractCommons plugin 所產生。

兩個進入點分別由index.html與admin.html負責。index.html使用app.bundle.js與commons.js，admin.html使用admin.bundle.js與commons.js。

#### 抽取CSS
webpack.config裡面，
```
// webpack.config.js
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name].bundle.css')

const config = {
  // ...
  module: {
    rules: [{
      test: /\.scss$/,
      loader: extractCSS.extract(['css-loader','sass-loader'])
    }, {
      // ...
    }]
  },
  plugins: [
    extractCSS,
    // ...
  ]
}
```
會產生[name].bundle.css，此 css檔案必須放到html檔案的head區塊。

優缺點：好處是用此plugins，css檔案可以拿去別的地方用。壞處是動態重新編譯後熱抽換(見Hot Module Replacement)的功能對css檔沒有讓瀏覽器自動更新的功能。

注意：對.scss的規則不能設定兩次。

## Code Splitting
模組分拆，能夠讓費時的模組獨立出來，透過Promise, load on demand的方式讓user experience更佳。

注意：publicPath的設定是必要的。

## Webpack-dev-server
`webpack-dev-server --inline`
可以讓src裡面的檔案一有更動，webpack自動重新編譯，相關正在瀏覽的瀏覽器頁面自動更新，不須人為的refresh。

## Hot Module Replacement
1. app.js 的檔頭增加
```
if (module.hot) {
  module.hot.accept()
}
```
2. config.plugins裡面增加`new webpack.NamedModulesPlugin()`
1. `webpack-dev-server --inline --hot`

假設index.html裡面有一些輸入的欄位，開啟localhost:8000/index.html後，進行一些輸入，發現程式需要修改。此時，程式直接修改，存檔後webpack會重新編譯，熱抽換有更改的模組，程式繼續執行，原來已經在index.html頁面中已經輸入的資料仍然保留完整。Hot Module Replacement 真的是很強的功能。

#### Hot Reloading CSS
要有CSS的熱抽換功能，不能用extractCSS將CSS抽取出來，透過link來使用。換句話說，對SCSS檔的規則用style-loader, css-loader, sass-loader。同時，移除extractCSS plugin,以及html檔裡面相關的x.bundle.css。
