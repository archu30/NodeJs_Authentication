// const mongoose = require("mongoose");
// require("dotenv").config()

// mongoose.connect('mongodb://127.0.0.1/nodejsAuthentication');

// mongoose.connect(process.env.db)
//     .then(() => { console.log('database conected successfully') })
//     .catch((error) => { console.log('not connected database') })
 
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/nodejsAuthentication');

const db = mongoose.connection;

db.on('error' , console.error.bind(console , "Error connecting to mongoDB"));


db.once('open' , function(){
    console.log('connected to database : mongoDB');
});

module.exports = db;