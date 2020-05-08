const express = require('express');
const router = express.Router();

const db = require("../sqlconnect");

const admin = require('../models/admin');

router
    .get('/', (req, res) => {
        res.status(418).send("This is the Admin controller interface. Also, I am a teapot");
    })
    .post('/methods/addUser/', (req, res) => {
        db.con.query(admin.addUserQuery(req.body.Name,req.body.Role,req.body.Login,req.body.Password,req.body.Type_ID,req.body.Profile_Pic), function(err, result) {
            if (err) res.status(500).send("Could not add user!");
            else res.status(200).send({result:result})
        });
    })

module.exports = router;