# socket.io

## 概念
閱讀[tutorialspoint socket.io](https://www.tutorialspoint.com/socket.io/)
，練習socket.io的功能。

注意：

1. index.html裡面的
```
<script src="/socket.io/socket.io.js"></script>
```
要改成
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.3.6/socket.io.min.js"></script>
```
2. app.js 裡面的sendfile是過時的，應該修改。

## 操作步驟

1. `npm install`
2. `npm install -g nodemon`
3. `nodemon app.js`
4. open `http://localhost:3000`
