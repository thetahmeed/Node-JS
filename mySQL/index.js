





var mSql = require('mysql');

// to connect with hole database
var databaseConnectionConfig ={
    host: "localhost",
    user: "root",
    password: "",
    // to connect with a specific location
    database: "user"
}

// making connection to the database
var con = mSql.createConnection(databaseConnectionConfig);
con.connect(function(err){
    if(err){
        console.log("There is an ENAAAAAMI")
    }else{
        console.log("Come no aNAAMi")
    }
});