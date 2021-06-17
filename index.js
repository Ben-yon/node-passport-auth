const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bcrypt = require('bcrypt-nodejs');
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.urlencoded({ extended: false}))
app.use(express.json());