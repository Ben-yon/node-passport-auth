const router = require('express').Router();
const passport = require('passport');
const genPassword = require('../lib/passportUtils').genPassword;
const connection = require('../config/database');
const User = connection.models.User;


/**
 * --------------------POST ROUTES----------------------
 */

// TODO 

// router.post('/login', passport.authenticate('local'), (req, res,next) = {});

router.post('/register', (req, res, next) => {
    const saltHash = genPassword(req.body.pword);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.uname,
        hash: hash,
        salt: salt
    });

    newUser.save()
    .then((user) => {
        console.log(user);
    });

    res.redirect('/login');
});

/**
 * ------------------GET ROUTES
 */
router.get('/', (req, res, next) => {
    res.send("please do something interesting with yourself");
})

router.get('/login', (req, res, next) => {
    res.send('leave a message here');
})

router.get('/register', (req, res, next) => {
    const form = '<h1>Register Page</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);
})


router.get('/protected-route', (req, res, next) => {
    if (isAuthenticated){

    }else{

    }
});

router.get('/logout', (req,res, next) => {
    req.logout();
    res.redirect('/protected-route');
});

module.exports = router;