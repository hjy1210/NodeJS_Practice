# 同形異碼
在實作檢索系統 YhLucene 的時候，就已經碰到同形異碼的問題。

有些檔案，明明具有所要的字卻檢索不到，原因是檢索的字與內容的字，雖同形卻不同碼。

當時用CSharp裡面的String.Normalize函數來處理。建立索引的時候，先把檔案的內容抽取出來並正規化後才進行索引的動作。

目前，發現javascript的String.normalize也可以正規化。驗證如下：

先將【中文的同形异码字问题.pdf】裡面提到的一些同形異碼字放在 SSDC.docx 裡面。接著

1. 用 `pandoc SSDC.docx -s -o SSDC.txt`
 將 SSDC.docx 轉成文字檔 SSDC.txt
1. 用 `node index` 將 SSDC.txt 的內容正規化成 NormalizedSSDC.txt
1. 用 `pandoc NormalizedSSDC.txt -s -o NormalizedSSDC.docx` 將文字檔 NormalizedSSDC.txt 轉成 NormalizedSSDC.docx
1. 觀察同形異碼字是否轉成同形同碼字。