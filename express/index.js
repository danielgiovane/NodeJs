const express = require("express") // Importando o express
const app = express() // inciando o express e passando para variavel app


app.get("/", function (req, resp) {
    resp.send("Novo Teste, Ok")
})

// Sem parametro obrigatorio
app.get("/app/v2/:nome?", function (req, res) {
    var nome = req.params.nome

    if (nome) {
        res.send(`<h2> Nome: ${nome} </h2>`)
    } else {
        res.send(`<h1> Ola </h1>`)
    }
})


// query-params
app.get("/app/v3", function (req, res) {
    var canal = req.query["canal"]

    if(canal){
        res.send(canal)
    }else {
        res.send("Nenhum canal fornecido!")
    }

})

// paramento obrigatorio
app.get("/app/v1/:nome", function (req, res) {
    var nome = req.params.nome
    res.send(`<h1> Oi ${nome} </h1>`)

})

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro")
    } else {
        console.log("nao ocorreu nenhum erro, servido iniciado com sucesso!!")
    }
})
