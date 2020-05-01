const express = require('express');
const router = express.Router();

const db = require("../sqlconnect");

const computers = require('../models/computers');

/*router.use(function (req, res, next) {
    next();
});*/

router
    .get('/', (req, res) => {
        db.con.query(computers.allComputersQuery, function (err, result) {
            if (err) throw err;
            res.send({result: result});
    });
})  .get('/:serviceTag', (req, res) => {
        const query = "SELECT * FROM Computer_Inventory_T WHERE Service_Tag = \"" + req.params.serviceTag + "\"";
        db.con.query(query, function (err, result) {
            if (err) throw err;
            res.send({result: result});
    });
})  .get('/active' , (req,res) => {
        const query = "SELECT * FROM Computer_Inventory_T WHERE Status_ID = 1";
        db.con.query(query, function (err, result) {
            if (err) res.status(500).send("Error in Computer controller");
            res.send({result: result});
    });
})
    .get('/stored' , (req,res) => {
        const query = "SELECT * FROM Computer_Inventory_T WHERE Status_ID = 0";
        db.con.query(query, function (err, result) {
            if (err) res.status(500).send("Error in Computer controller");
            res.send({result: result});
    });
});

module.exports = router;