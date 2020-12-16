





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

        //insertData(con)

        //deletData(con)

        //updateData(con)

        selectData(con)
    }
});

// to insert data to the database
function insertData(con){

    // command for inserting data // you can find it on phmyadmin > SQL > insert
    let SQL_COMMAND = "INSERT INTO `user_list`(`name`, `phone`) VALUES ('Rana','01745245755')"

    con.query(SQL_COMMAND, function(err){

        if(err){
            console.log("Facing error to inserting data")
        }else{
            console.log("Data insered")
        }

    })

}

// to delete data from the database
function deletData(con){

    // command for deleting data // you can find it on phmyadmin > SQL > delete
    //  let SQL_COMMAND = "DELETE FROM `user_list` WHERE `id` = '4'" or (not working here)
    //  let SQL_COMMAND = "DELETE FROM `user_list` WHERE `user_list`.`id` = 4" or
    let SQL_COMMAND = "DELETE FROM `user_list` WHERE `user_list`.`name` = 'Rana'"

    con.query(SQL_COMMAND, function(err){

        if(err){
            console.log("Facing error to deleting data")
        }else{
            console.log("Data deleted")
        }

    })

}

// to update data from the database
function updateData(con){

    // command for updating data // you can find it on phmyadmin > SQL > update
    let SQL_COMMAND = "UPDATE `user_list` SET `name`='Tahmeedul',`phone`='50125485745' WHERE `user_list`.`id` = '3'"

    con.query(SQL_COMMAND, function(err){

        if(err){
            console.log("Facing error to updating data")
        }else{
            console.log("Data updated")
        }

    })

}

// to seleting data from the database
function selectData(con){

    // command for selecting all data // you can find it on phmyadmin > SQL > select*
    let SQL_COMMAND = "SELECT * FROM `user_list`"
    // command for specific data // you can find it on phmyadmin > SQL > seelct
    //  let SQL_COMMAND = "SELECT `name` FROM `user_list` WHERE `user_list`.`id` = '5'"

    con.query(SQL_COMMAND, function(err, result){

        if(err){
            console.log("Facing error to selecting data")
        }else{
            console.log("Data selected")
            // it's return a JSON file
            console.log(result)

            // converting JSON to string
            var resultString = JSON.stringify(result);
            console.log("Result as a string: "+ resultString)
        }

    })

}