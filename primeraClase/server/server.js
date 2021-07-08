const express = require('express');   /* o -----> import express from "express";*/   
const users = require("./users.json");
const app = express();


app.get('/hello', (req, res) => {
    res.send('Hello');
});

app.get('/users', (req, response) => {
    // const arrayUsers = ['antonio','ronar','diego','leon','manuel','juan'];
    response.send(users);
});

app.get("/users/:id", (request, response) => {
    // const arrayUsers = ['antonio','ronar','diego','leon','manuel','juan'];
    let id = parseInt(request.params.id);
    const person = users.find((per)=>per.id === id);
    // resultado de filter si se sabe que solamente un elemento cumplia con la condicion filtro, y acceder luego al valor cero de esa nueva array resltandte 
    response.send(person);
});

app.use(express.json());     /* middle ware -  capa media */ 

app.post("/users", (req,response) => {
    const newUser = req.body;
    let newId = users.length;
    newUser.id = newId;
    console.log(req.body); 
    console.log(newId);
    users.push(newUser);
    //
    response.send(users);
});

app.listen(3000, () => console.log("Server is up and running"))


/*

INICIAL DE CLASE GET AUTOMATICO SIN RECURSO

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(3000, () => console.log("Server is up and running"));

*/