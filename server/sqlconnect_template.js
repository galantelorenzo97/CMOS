/*
    Developed By Engr. Lorenzo Galante
    Use this template to connect to a database
    For MySQL the first query MUST be "USE your_database_name;"
*/

const express = require('express');
const mysql = require('mysql');

const con = mysql.createConnection(
    {
        host: "",
        user: "",
        password: ""
    }
);

function myQuery (sqlQuery) {
    con.query(sqlQuery, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
}

con.connect(
    function(err) 
    {
        if (err) throw err;
        console.log("Connected");
        myQuery("");
});