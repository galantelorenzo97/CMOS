const express = require('express');
const router = express.Router();

const db = require("../sqlconnect");

/*router.use(function (req, res, next) {
    next();
});*/

router
    //ALL COMPUTERS, NO VERBOSE
    .get('/', (req, res) => {
        res.status(200).send("Helpdesk Interface Home");
        /*db.con.query(computers.allComputersQuery, function (err, result) {
            if (err) throw err;
            res.send({ result: result });
        });*/
    });

module.exports = router;