const router = require('express').Router;

const passport = require('passport');
const passwordUtils = require('../lib/passportUtils');
const connection = require('../config/database');



/**
 * --------------------POST ROUTES----------------------
 */

// TODO 

router.post('/login', passport.authenticate('local'), (req, res,next) = {

})

router.post('/register', (req, res, next) =>{
    const saltHash = passwordUtils.genPassword(req.body.pw);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new user({
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


router.get('/login', (req, res, next) => {
    res.send('leave a message here')
})

router.get('/register', (req, res, next) => {
    const form = 'there is a form here, have patience.'

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
})