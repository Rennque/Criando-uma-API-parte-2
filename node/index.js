const express = require("express");
const app = express();
app.use(express.json());

/* app.get("/list-users", (req, res) => {
  res.send([{ name: "João" }, { name: "Rayane" }]);
});

app.get("/get-user/:id/:nome", (request, response) => {
  console.log(request.params);
  response.send(":id = " + request.params.id + "   :nome = " + req.params.nome);
});
app.post("/create", (req, res) => {
  console.log(req.body);
  res.send({ menssagem: "Usuário criado com sucesso" });
});
app.delete("/deletedUser/:id", (req, res) => {
   
    let users = [
        { id: 1, nome: "Henrique" }, 
        { id: 2, nome: "Cintia" }, 
        { id: 3, nome: "Nicolas" }
    ];

    let achou = users.filter((usuario)=>{
        return usuario.id == req.params.id;
    });

    if(achou.length){
        res.status(200).send("Usuário deletado");
    }else{
        res.status(404).send("Id não encontrado")
    }
});

 */

app.post('/newChecklist/:id/:nome', (req, res) =>{
   
    let user = [
        {
            "nome":"Fulano",
            "idade":18,
            "cargo":"junior",
            "senha":"12345678"
          }
    ]    
    console.log(req.body);
    res.send({ menssagem: "Usuário criado com sucesso" });
  });

app.listen(3333, () => {
  console.log("Servidor online!!!");
});