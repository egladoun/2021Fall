const { MongoClient } = require('mongodb');

const uri = "mong0db+srv://<username>:<password>@clusterooi3z.mongodb.net/myFirstDatabase?retryWrites=true&";

const client = new MongoClient(uri, { useNewUriParser: true, useUnifiedTopology: true });


const isConnected = client.connect();

module.exports = {
    client, isConnected
}