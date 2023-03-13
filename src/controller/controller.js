const fs = require('fs');

const users = require('../../data/users.json');
const idList = users.map(user => user.id);
let maxId = Math.max(...idList)

const getAllUsers = (_, res) => {
  res.status(200).json(users);
}

const getUserId = (req, res) => {
  const idRequest = parseInt(req.params.id);
  const userFound = users.find(user => (
    user.id === idRequest
  ));
  
  if(userFound == undefined) {
    res.status(400).json({message: `User ID not found.`});
  } else {
    res.status(200).json(userFound);
  }
}

const validateLeader = (req, res, next) => {
  if(req.body.position.toUpperCase() !== 'LEADER') {
    res.status(400).json({message: `Not allowed. Only Leaders can add new users.`});
  } else {
    next();
  }
};

const addUser = (req, res) => {
  const newUser = req.body;
  
  if(newUser.name.length > 0 && newUser.position.length > 0 && newUser.password.length > 0) {
    if(newUser.age >= 21) {
      const newId = maxId+1;
      users.push({
        "id": newId,
        "name": newUser.name,
        "age": newUser.age,
        "position": newUser.position,
        "password": newUser.password
      });
    
      res.status(200).json({message: `User ${newUser.name} created with success!`});

      maxId = newId;
    } else {
      res.status(400).json({message: `Infelismente não ter idade suficiente para ter acesso.`})
    }
  } else {
    res.status(406).json({message: `Faltam dados! Informe um usuário válido, contendo nome, idade, cargo e senha.`});
  }
};

const deleteUser = (req, res) => {
  const idRequest = parseInt(req.params.id) || null;
  
  if(idRequest > 0 || idRequest != null) {
    const userFound = users.find(user => (
      user.id === idRequest
    ));
  
    let deleteIndex = users.indexOf(userFound);

    if(deleteIndex > -1) {
      const deletedName = userFound.name;
      users.splice(deleteIndex, 1);
      res.status(200).json({message: `Usuario ${deletedName} Deletado.`});
    } else {
      res.status(400).json({message: `ID do usuário não encontrado.`});
    }
  } else {
    res.status(406).json({message: `Por favor, informe um ID de usuário.`});
  }
}

module.exports = {
  getUserId,
  getAllUsers,
  validateLeader,
  addUser,
  deleteUser
}