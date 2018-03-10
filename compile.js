var pug = require("pug")
var fs = require("fs")



fs.writeFile("index.html", pug.compileFile("sources/views/index.pug", {"pretty":true})())