const { MongoClient } = require("mongodb");
const assert = require("assert");

// connection url.
const uri =
  "mongodb://localhost:27017";

// Db name
const dbName = 'fruitsDB';

// create new mongo client
const client = new MongoClient(uri, {useUnifiedTopology: true});

// use connect method to connect to server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server.");

  const db = client.db(dbName);

  insertDocument(db, function() {
    client.close();
  });

});

const insertDocument = function(db, callback) {
  // get document collection
  const collection = db.collection('fruits');
  // insert some document
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Kinda sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great stuff!"
    }
  ], function(err, result) {
    assert.equal(err, null);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};
