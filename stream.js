var fs=require("fs")
readStream=fs.createReadStream("stream.js")
writeStream = fs.createWriteStream("output.js")
readStream.pipe(writeStream)
console.log("End of program")
