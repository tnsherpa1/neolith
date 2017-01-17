'use strict';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expHbs = require('express-handlebars');
var map = require('express-sitemap');
var appRoutes = require('./routes/app');

var app = express();
var mongoUri;
if (process.env.NODE_ENV === "production") {
  mongoUri = "mongodb://heroku_bfw2mk27:ria6p20i6edqdn5ff2h8ltucfh@ds163738.mlab.com:63738/heroku_bfw2mk27" ;
} else {
  mongoUri = 'mongodb://localhost:27017/neodb';
}
mongoose.connect(mongoUri);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', expHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
res.render('pages/about');
});

/*
 * sitemap
 */
var sitemap = map({
  sitemap: 'neolith.xml', // path for .XMLtoFile
  route: {
    'ALL': {
      lastmod: '2014-01-16',
      changefreq: 'always',
      priority: 1.0,
    }
  },
});

sitemap.generate(app); // generate sitemap from express route, you can set generate inside sitemap({})

sitemap.XMLtoFile(); // write this map to file

module.exports = app;
