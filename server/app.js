const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cons = require('consolidate');

// définition des routes
const indexRouter = require('./routes/index');
const error = require('./routes/error');

const app = express();

https
	.createServer(
		{
			cert: fs.readFileSync('./certificates/server.crt'),
			key: fs.readFileSync('./certificates/server.key'),
		},
		app
	)
	.listen(3443);

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.engine('html', cons.swig);
app.set('view engine', 'html');

// install global middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// install routes middlewares
app.use('/*', indexRouter);

// in all other cases use error route middleware
app.use(error);

module.exports = app;
