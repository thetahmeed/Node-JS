











var mMongo = require('mongodb').MongoClient;
// conecting with the hole database
var mUrl = "mongodb://127.0.0.1:27017/";

// configaration
var mConfig = { useUnifiedTopology: true }

// conecting to the database
mMongo.connect(mUrl, mConfig, function(err, mongoClient){

    if(err){
        console.log("There is an error!")
    }else{
        console.log("Database is Working!")
        insertData(mongoClient);
    }

})

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