const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const validPassword = require('../utils/passportUtils').validPassword;

const connection = require('./database');

const User = connection.models.User;
const customFields = {
    usernameField: 'uname',
    passwordField: 'pword'
};

const verifyCallback = (username, password, cb) => {
    User.findOne({username: username})
    .then((user) => {
        if (!user){
            return cb(null, false)
        }

        const isValid = validPassword(password, user.hash, user.salt);
        if (isValid){
            return cb(null, user);
        }else{
            return cb(null, false);
        }
    })
    .catch((err) => {
        return cb(err);
    });
}
const strategy = new LocalStrategy(customFields,verifyCallback)

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
    .then((user) => {
        done(null, user);
    })
    .catch(err=> done(err))
});