const path = require('path');

const express = require('express');
const cors = require('cors');
require('express-async-errors');
const helmet = require('helmet');

const shortUrlRoute = require('./routes/shortUrl.route');

// error Handling
const errorHandlerMiddleware = require('./middlewares/errorHandler.middleware');
const notFoundMiddleware = require('./middlewares/not-found');

const app = express();

app.set('trust proxy', 1);

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// setting up ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define routes
app.use(shortUrlRoute);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

module.exports = app;
