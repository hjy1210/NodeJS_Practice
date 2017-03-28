# Features

## Home page
Add  `"homepage": ".",` in package.json, we need not put the contents of 
build directory on root of production web server.

## Detect Encoding
Use node module [chardet](https://www.npmjs.com/package/chardet) to detect encoding of text files.

Following is the usage shown in chardet's home page.
```
var chardet = require('chardet');
chardet.detect(new Buffer('hello there!'));
// or 
chardet.detectFile('/path/to/file', function(err, encoding) {});
// or 
chardet.detectFileSync('/path/to/file');
```
#### Clinet side detect encoding
Scenario: correctly extract the text from upload/drag&drog file in client side.

Assume file is one of the drop file, reader is an instance of FileReader,
1. use `reader.readAsArrayBuffer(file)` to get ArrayBuffer,say arraybuf.
2. use `var enc=chardet.detect(new Buffer(arraybuf))` to detect the encoding as enc.
3. use `reader.readAsText(file,enc)` to extract the content of file.