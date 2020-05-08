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
            else res.send({ result: result });
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
            else res.send({result: result})
        });
    })
    .get('/methods/getComments/:ticketID', (req, res) => {
        db.con.query(helpdesk.getComments(req.params.ticketID), function (err, result) {
            if (err) res.status(500).send("Error in helpdesk controller");
            else res.send({result: result});
        })
    })
    .post('/methods/postComment', (req, res) => {
        db.con.query(helpdesk.postComment(req.body.ticketID, req.body.commentID, req.body.userID, req.body.Comment), function(err, result) {
            if (err) res.status(500).send("Failed to post comment");
            else res.send({result: result})
        })
    })
    .get('/methods/disownTicket/:id', (req, res) => {
        db.con.query(helpdesk.disownTicket(req.params.id), function(err, result) {
            if (err) res.status(500).send("Failed to disown ticket");
            else res.send({result:result})
        })
    })
    .get('/methods/waitForUser/:id', (req, res) => {
        db.con.query(helpdesk.waitForUser(req.params.id), function(err,result) {
            if (err) res.status(500).send("Failed to set waitForUser");
            else res.send({result: result})
        })
    })
    .get('/methods/closeTicket/:id', (req, res) => {
        db.con.query(helpdesk.closeTicket(req.params.id), function(err,result) {
            if (err) res.status(500).send("Failed to close ticket");
            else res.send({result: result})
        })
    })
    .get('/methods/reopenTicket/:id', (req, res) => {
        db.con.query(helpdesk.reopenTicket(req.params.id), function(err,result) {
            if (err) res.status(500).send("Failed to close ticket");
            else res.send({result: result})
        })
    })
module.exports = router;