





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
        deleteAllData(mongoClient);
    }

})

// 1 inserting data
function insertData(mongoClient) {

    var myDB = mongoClient.db('user')               // getting database
    var myDBTable = myDB.collection('user_list')    // getting table

    // this is the data
    let myData = {
        name: "Tahmeed",
        phone: "5",
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

// 2. deleting data (Single)
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

    myDBTable.deleteMany(function(err){
        if(err){
            console.log("Error!")
        }else{
            console.log("All data is deleted")
        }
    })

}
