let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let client;
async function connect(){
    if(!client)
    client = await mongoClient.connect("mongodb://localhost:27017");
    return client.db('Hazbin');
}

module.exports = connect;