const express = require('express');

const Router = express.Router();

const weatherController = require('./../controllers/weatherController');

Router.route('/:location').post(weatherController.getData);

module.exports = Router;
