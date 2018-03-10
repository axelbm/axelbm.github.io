var pug = require("pug")
var fs = require("fs")



fs.writeFileSync("index.html", pug.compileFile("sources/views/index.pug", {"pretty":true})())
// fs.copyFileSync("sources/style.css", "style.css")