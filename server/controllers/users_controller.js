const express = require('express');
const router = express.Router();

const db = require("../sqlconnect");

const users = require('../models/users');

router

    .get('/', (req, res) => {
        db.con.query(users.fullUserQuery, function (err, result) {
            if (err) throw err;
            res.send({ result: result });
        })
    })
    .post('/login', (req, res) => {
        db.con.query(users.Login(req.body.username, req.body.password), function (err, result) {
            if (err) res.status(500).send("Internal Server Error");
            if (result.length == 0) res.status(401).send({ message: "Username or Password is Incorrect"})
            else res.send({ result: result });
        })
        /*
        try {
            const user = users.Login(req.body.username, req.body.password);
            res.send({ ...user, Password: undefined });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }*/
    });

module.exports = router;