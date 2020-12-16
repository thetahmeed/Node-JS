// 1. install mySQL by this command, 'npm install mysql'

// now we need a database searver environment (we are using ZAMPP here)
// 2. open zampp > start first two module (apache and mySQL)

// 3. import mysql on index.js (var mSql = require('mysql');)

// 4. now we need a configaration file to make connection between index.js and MySQL database
    var databaseConnectionConfig ={
    host: "localhost",
    user: "root",
    password: ""
    }

    // follow the index.js for rest