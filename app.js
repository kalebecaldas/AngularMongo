var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var pessoa = require('./routes/pessoa');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* API */
app.use('/pessoa', pessoa);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/*-- Conexão com Mongo Atlas*/
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.connect('mongodb+srv://kalebecaldas:123@cluster0-kviqd.mongodb.net/test?retryWrites=true', { promiseLibrary: require('bluebird') })
mongoose.connect('mongodb://localhost/AngDB', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('Connection succesful'))
  .catch((err) => console.error(err));