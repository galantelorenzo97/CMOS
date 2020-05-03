const express = require('express');
const router = express.Router();

const db = require("../sqlconnect");

const computers = require('../models/computers');

/*router.use(function (req, res, next) {
    next();
});*/

router
    //ALL COMPUTERS, NO VERBOSE
    .get('/', (req, res) => {
        db.con.query(computers.allComputersQuery, function (err, result) {
            if (err) throw err;
            res.send({ result: result });
        });
    })
    //search by Column and Value, NO VERBOSE
    .get('/search/:colName/:valueToCheck', (req, res) => {
        const query = "SELECT * FROM Computer_Inventory_T WHERE " + req.params.colName + " = \"" + req.params.valueToCheck + "\"";
        db.con.query(query, function (err, result) {
            if (err) throw err;
            res.send({ result: result });
        });
    })
    //VERBOSE Search
    .get('/verbose/search/byNameVal/:colName/:valueToCheck', (req, res) => {
        const query = computers.verboseColValCheck(req.params.colName, req.params.valueToCheck);
        console.log(query);
        db.con.query(query, function (err, result) {
            if (err) throw err;
            res.send({ result: result });
        });
    })
    //ALL computers, VERBOSE
    .get('/verbose', (req, res) => {
        db.con.query(computers.verboseJoinQuery, function (err, result) {
            if (err) throw err;
            res.send({ result: result });
        });
    })
    //VERBOSE Search by Computer ID
    .get('/verbose/search/byComputerID/:computerID', (req, res) => {
        db.con.query(computers.singleVerboseComputerQuery(req.params.computerID), function (err, result) {
            if (err) throw err;
            res.send({ result: result });
        });
    })
    //ALL ACTIVE COMPUTERS, NO VERBOSE
    .get('/active', (req, res) => {
        const query = "SELECT * FROM Computer_Inventory_T WHERE Status_ID = 1";
        db.con.query(query, function (err, result) {
            if (err) res.status(500).send("Error in Computer controller");
            res.send({ result: result });
        });
    })
    //ALL ACTIVE COMPUTERS, VERBOSE
    .get('/verbose/active', (req, res) => {
        const query = computers.verboseActiveQuery;
        db.con.query(query, function (err, result) {
            if (err) res.status(500).send("Error in Computer controller");
            res.send({ result: result });
        });
    })
    //ALL STORED COMPUTERS, NO VERBOSE
    .get('/stored', (req, res) => {
        const query = "SELECT * FROM Computer_Inventory_T WHERE Status_ID = 0";
        db.con.query(query, function (err, result) {
            if (err) res.status(500).send("Error in Computer controller");
            res.send({ result: result });
        });
    })
    //ALL STORED COMPUTERS, VERBOSE
    .get('/verbose/stored', (req, res) => {
        const query = computers.verboseStoredQuery;
        db.con.query(query, function (err, result) {
            if (err) res.status(500).send("Error in Computer controller");
            res.send({ result: result });
        });
    });

module.exports = router;