const mongo = require('mongoose');


//Connects to the db *if not already created-mongod will create it for you.*
mongoose.connect('mongodb://localhost/slang');
const db = mongoose.connection;
    //If an error happens this will console log it (and will work in older IE browsers).
    db.on('error', console.error.bind(console, 'mongodb connection error'));

//Schema = a blueprint of what your db looks like
const searchSchema = new mongoose.Schema;

