const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://jaigoel14:Jai@080903@airbnb.8bduv.mongodb.net/?retryWrites=true&w=majority&appName=airbnb";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(url)
  .then((client) => {
    
    console.log(client);
    _db = client.db("airbnb");
    callback();
  })
  .catch(error => {
    console.log('Error came while connecting to mongoDB ', error);
  });
};

const getDb = () => {
  if (!_db) {
    throw new Error('Could not connect to DB')
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;