const express = require('express');

const app = express();

app.use(middleware);

function middleware(req, res, next){
    req.customParam = 450;
    console.log("I am the first middleware");
    next();
}

function sendRequestHTML( requestObj, responseObj, next){
    responseObj.send(`<html>Custom Param is ${requestObj.customParam}</html>`)
}

app.get('/', sendRequestHTML)
app.listen(7890);