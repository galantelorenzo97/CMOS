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
    })
    .get('/assignedTo/:id', (req, res) => {
        db.con.query(helpdesk.openTicketsAssignedTo(req.params.id), function (err, result) {
            if (err) res.status(500).send("Error in helpdesk controller");
            else res.send({result: result});
        });
    })
    .get('/methods/assignTicket/:userID/:ticketID', (req,res) => {
        db.con.query(helpdesk.assignTicket(req.params.userID, req.params.ticketID), function (err, result) {
            if (err) res.status(500).send("Error in helpdesk controller");
            res.send({result: result})
        });
    })
    .get('/methods/getComments/:ticketID', (req, res) => {
        db.con.query(helpdesk.getComments(req.params.ticketID), function (err, result) {
            if (err) res.status(500).send("Error in helpdesk controller");
            res.send({result: result});
        })
    })

module.exports = router;