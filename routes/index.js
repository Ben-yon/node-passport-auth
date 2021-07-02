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

})

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