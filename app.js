const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const globalErrorHandler = require('./controllers/errorController');
const weatherRouter = require('./routes/weatherRoute');

app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/', weatherRouter);

app.all('*', (req, res, next) => {
  const err = new Error(
    `The route ${req.originalUrl} does not exist on this server`
  );
  err.statusCode = 400;
  err.status = 'fail';
  next(err);
});

app.use(globalErrorHandler);

module.exports = app;
