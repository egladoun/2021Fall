/*  B"H
*/
const express = require("express");
const model = require("../models/users");

const app = express.Router();

app
    .get("/", (req, res, next) =>{
        model.GetAll()
            .then
    })
    .get("/:user_id", (req, res, next) =>{
        res.send(model.Get(req.params.user_id));
        model.Get(req.params.user_id)
            .then(user=>{
                .catch(next);
            })
            .catch(next);
    })
    .post("/login", (req, res, next) =>{

        model.Login(req.body.handle, req.body.password)
            .then(user=>{ 
                res.send(user);
            })
            .catch(next) 

    })
    .post("/register", (req, res, next) =>{
        model.Add(req.body)
            .then(user=>{
                res.status(201).send(user);
            })
            .catch(next) 
    })
    .seed("/seed", (req, res, next) =>{
        model.Seed(req.body)
            .then(user=>{
                res.status(201).send("Created");
            })
            .catch(next) 
    })

module.exports = app;