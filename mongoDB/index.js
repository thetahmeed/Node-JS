





var mMongo = require('mongodb').MongoClient;
// conecting with the hole database
var mUrl = "mongodb+srv://tahmeedul:cK4H6VVF9fPQPYF6@cluster0.mvhfs.mongodb.net?retryWrites=true&w=majority";
// connecting with a specific location
// var mUrl = "mongodb+srv://tahmeedul:cK4H6VVF9fPQPYF6@cluster0.mvhfs.mongodb.net/user?retryWrites=true&w=majority";

// configaration
var mConfig = { useUnifiedTopology: true }

// conecting to the database
mMongo.connect(mUrl, mConfig, function(err, mongoClient){

    if(err){
        console.log("There is an error!")
    }else{
        console.log("Done!")
        
        //insertData(mongoClient);

        //deleteData(mongoClient);

        //deleteAllData(mongoClient);

        //findData1(mongoClient);
        //findData2(mongoClient);
        //findData3(mongoClient);
        //findData4(mongoClient);
        //findData5(mongoClient);
        //findData6(mongoClient);

        //updateData1(mongoClient);
        //updateData2(mongoClient);

        //createNewCollection(mongoClient);

        deleteCollection(mongoClient);


    }

})

// 1 inserting data
function insertData(mongoClient) {

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    // this is the data
    let myData = {
        name: "Tahmeed",
        phone: "3",
        country: "Bangladesh"
    }

    // pushing data to the database
    myDBTable.insertOne(myData, function(err){
        if(err){
            console.log("Error!")
        }else{
            console.log("Data is added")
        }
    })

}

// 2.0 deleting data (Single)
function deleteData(mongoClient){

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    let myData = {
        phone: "2"
    }

    myDBTable.deleteOne(myData, function(err){
        if(err){
            console.log("Error!")
        }else{
            console.log("Data is deleted")
        }
    })

}

// 2.1 deleting data (All)
function deleteAllData(mongoClient){

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    myDBTable.deleteMany(function(err, result){
        if(err){
            console.log("Error!")
        }else{
            // first "result" is from the top, second "result" is the return array name, "n" is the key name
            console.log(result.result.n+" item is deleted.")
        }
    })

}

// 3.0 finding data (Single-First Data)
function findData1(mongoClient){

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    myDBTable.findOne(function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log(result)
        }
    })

}

// 3.1 finding data (Single-Specific Data)
function findData2(mongoClient){

    let myData = {
        phone: "4"
    }

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    myDBTable.findOne(myData, function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log(result)
        }
    })

}

// 3.2 finding data (All data)
function findData3(mongoClient){

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    myDBTable.find().toArray(function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log(result)
        }
    })
    
}

// 3.3 finding data (Only column data )
function findData4(mongoClient){

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    var itemOBJ = {} // because we are selecting all data
    // specifing the column
    var itemProjection = { 
        projection : {
            // we can use comma to select multiple column
            name: "",
            country: ""
        }
    }

    myDBTable.find(itemOBJ, itemProjection).toArray(function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log(result)
        }
    })
    
}

// 3.4 finding all data by query (target is value)
function findData5(mongoClient){

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    // searching all the raw where "name" value is "Tahmeed" // use comma for multiple condition
    var query = {name: "Tahmeed", phone: "5"}

    myDBTable.find(query).toArray(function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log(result)
        }
    })
    
}

// 3.5 finding data (with Limit)
function findData6(mongoClient){

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    // Only 2 JSON object will return
    myDBTable.find().limit(2).toArray(function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log(result)
        }
    })
    
}

// 3.6 finding data (with Sorting)
function findData7(mongoClient){

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    var sortingPattern = {phone:1} // 1 = Small to Big, -1 = Big to small

    // Only 2 JSON object will return
    myDBTable.find().sort(sortingPattern).toArray(function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log(result)
        }
    })
    
}

// 4. updating data (Single)
function updateData1(mongoClient){

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    var where = {name: "Tahmeed"}                   // where we want to change
    var what = {$set: {country: "USA"}}           // what we want to change

    // Only 2 JSON object will return
    myDBTable.updateOne(where, what, function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log("Updated.")
        }
    })
    
}

// 4.1 updating data (Many)
function updateData2(mongoClient){

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    var where = {name: /^S/}                        // from everywhere, where name starts with S
    var what = {$set: {country: "USA"}}             // what we want to change

    // Only 2 JSON object will return
    myDBTable.updateOne(where, what, function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log("Updated.")
        }
    })
    
}

// 5. creting a new collection aka new database Table
function createNewCollection(mongoClient){

    var myDB = mongoClient.db('user')                       // getting database
    
    // creating a new table
    var myDBTable = myDB.createCollection('user_list2', function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log("New table created.")
        }       
    })      

}

// 6. deleting a collection aka new database Table
function deleteCollection(mongoClient){

    var myDB = mongoClient.db('user')                       // getting database

    // deleting a table
    var myDBTable = myDB.dropCollection('user_list2', function(err, result){
        if(err){
            console.log("Error!")
        }else{
            console.log("Table deleted.")
        }
    })      

}