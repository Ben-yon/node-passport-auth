const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bcrypt = require('bcrypt-nodejs');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const MongoStore = require('connect-mongo');

const app = express();
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

const dbstring = 'mongodb://localhost:27017/tutorial_db';

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connection = mongoose.createConnection(dbstring, dbOptions);
if (connection){
    console.log("connected")
}

const sessionStore = new MongoStore({
    mongoUrl: dbstring,
    collection: 'sessions'
});

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 24 // Equals 1 days
    }
}));

app.get('/', (req, res, next) => {
    if (req.session.viewCount){
        req.session.viewCount = req.session.viewCount + 1;
    }else{
        req.session.viewCount = 1;
    }
    console.log(req.session);
    res.send(`<h1> You have visited the page ${ req.session.viewCount } number of times.<h1>`)
});

const PORT = 6001
app.listen(PORT, ()=> {
    console.log(`app is running on ${PORT}`);
})
