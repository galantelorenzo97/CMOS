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
    });

module.exports = router;