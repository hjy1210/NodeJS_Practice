## 文字資料轉成 PowerPoint

利用 [JavaScript library that creates PowerPoint (pptx) presentations](https://github.com/gitbrent/PptxGenJS) ，寫成給福智團體使用的本文轉簡報轉換器
index.html 。

index.html與libs子目錄是兄弟關係，雙擊index.html就可開始工作。

index.html 有處理卷數、品名、本文的功能。

FoodgeWithEncoding.html有辨識檔案編碼的困難，不適合福智使用，
而且FoodgeWithEncoding.html目前只有處理本文的能力。

## Detect Encoding
Use node module [jschardet](https://www.npmjs.com/package/jschardet) to detect encoding of text files.

Following is the usage shown in jschardet's home page.
```
var jschardet = require("jschardet")

// "àíàçã" in UTF-8
jschardet.detect("\xc3\xa0\xc3\xad\xc3\xa0\xc3\xa7\xc3\xa3")
// { encoding: "UTF-8", confidence: 0.9690625 }

// "次常用國字標準字體表" in Big5
jschardet.detect("\xa6\xb8\xb1\x60\xa5\xce\xb0\xea\xa6\x72\xbc\xd0\xb7\xc7\xa6\x72\xc5\xe9\xaa\xed")
// { encoding: "Big5", confidence: 0.99 }
```
#### Clinet side detect encoding
Scenario: correctly extract the text from upload/drag&drog file in client side.

Assume file is one of the drop file, reader is an instance of FileReader,
1. use `reader.readAsText(file,'ascii)` to get contents as string, say str.
2. use `var encoding=jschardet.detect(str).encoding` to detect the encoding as encoding.
3. use `reader.readAsText(file,encoding)` to extract the contents of file.