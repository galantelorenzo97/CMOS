const express = require('express');
const router = express.Router();

const db = require("../sqlconnect");

const helpdesk = require('../models/helpdesk');
/*router.use(function (req, res, next) {
    next();
});*/

router
    //ALL Helpdesk Tickets
    .get('/', (req, res) => {
        db.con.query(helpdesk.fullTicketJoinQuery, function (err, result) {
            if (err) throw err;
            res.send({ result: result });
        });
    });

module.exports = router;