process.env.NODE_ENV = 'production'; // altere para 'production' ou 'dev'

var express = require('express');
const path = require('path'),
cookieParser = require('cookie-parser'),
logger = require('morgan'),
indexRouter = require('./routes/index'),
usuariosRouter = require('./routes/usuarios'),
app = express();

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);

module.exports = app;