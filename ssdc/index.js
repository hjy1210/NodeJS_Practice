var fs=require('fs')
var str=fs.readFileSync("SSDC.txt",'utf-8')
fs.writeFileSync("NormalizedSSDC.txt",str.normalize())
