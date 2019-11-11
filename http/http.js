
var http = require("http")

http.createServer(function (req,resp){
    resp.end("<h1>Bem vindo ao servidor<h1/> <br><br> <h3>Nosso servidor esta funcional<h3/>")

}).listen(8181)