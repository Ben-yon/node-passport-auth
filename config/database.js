const mongoose = require('mongoose');

require('dotenv').config();



const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
if (connection){
    console.log("connected");
}


const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});

const User = connection.model('User', UserSchema);

//Expose the connection
module.exports = connection;