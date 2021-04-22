const mongodb = require('mongodb')

const mongoUrl = `mongodb://root:example@${process.env.MONGO_HOSTNAME || 'localhost' }:27017`;
const dbName = 'todos';

db = null;
client = null

function connect(options, callback){
    client = new mongodb.MongoClient(mongoUrl, {
        useUnifiedTopology: true,
        ...options
    });
    
    client.connect(function(err) {
        db = client.db(dbName);
        callback(err);
      });
}

function getDb(){
    return db
}

function close(){
    if(client)
        client.close()
}

module.exports = {
    connect, getDb, close
}