





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
        console.log("No database found")
    }else{
        console.log("Found a database")

        // sending SQL conection 
        insertData(con)
    }
});

// to insert data to the database
function insertData(con){

    // command for inserting data // you can find it on phmyadmin > SQL > insert
    let SQL_COMMAND = "INSERT INTO `user_list`(`name`, `phone`) VALUES ('Afifa','01745241526')"

    con.query(SQL_COMMAND, function(err){

        if(err){
            console.log("facing error to inserting data")
        }else{
            console.log("Data insered")
        }

    })

}