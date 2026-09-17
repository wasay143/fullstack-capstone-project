const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

async function connectToDatabase() {
    await client.connect();
    console.log("Connected to MongoDB");

    return client.db("capstone_db");
}

module.exports = { connectToDatabase };
