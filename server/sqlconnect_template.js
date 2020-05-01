/*
    Developed By Engr. Lorenzo Galante
    Use this template to connect to a database
    For MySQL the first query MUST be "USE your_database_name;"
*/

const express = require('express');
const mysql = require('mysql2'); //DO NOT USE mysql. mysql doesn't work! You'll thank me later!


const con = mysql.createConnection(
    {
        host: "",
        user: "",
        password: "",
        database: ""
    }
);

con.connect(
    function(err) 
    {
        if (err) throw err;
        console.log("Connected");
});

function disconnectDB()
{
    con.end( function (err) {
        if (err) throw err;
        console.log("Disconnected");
    })
}

module.exports = {
    disconnectDB: disconnectDB,
    con: con
};