# Visual Studio Code
Reference : [VSCode Edit Debugging](https://code.visualstudio.com/docs/editor/debugging)
## Debug example(2017/03/09)
1. open folder with project directory
1. click debug icon in View bar
1. click down triangle on top bar of Side bar, choose Add Configuration, 
file (.vscode/lauch.json) created according to package.json
1. set break points on app.js, dishReouter.js,.....
1. click down triangle on top bar of Side bar, choose Launch Program, then click right triangle to start debug
1. open localhost:3000/[routepath] to trigger app request-response cycle.

## google chrome dev tool
1. execute `node --inspect --debug-brk bin\www`, get string "chrome-devtools://devtools/remote/serve_file/@60.......=127.0.0.1:9229/..."
2. On chrome, open above address to observe javascript source.
3. On another tab, open localhost:3000, to trigger request-response cycle.
4. On tab opened in 2, use stepover, stepin, stepout ,...button to perform debug.
