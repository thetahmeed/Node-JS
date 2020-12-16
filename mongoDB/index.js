





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
        insertData(mongoClient);
    }

})

// inserting data
function insertData(mongoClient) {

    // getting database
    var myDB = mongoClient.db('user')

    // getting table
    var myDBTable = myDB.collection('user_list')

    // this is the data
    var myData = {
        name: "Tahmeed",
        phone: "01700547406",
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
