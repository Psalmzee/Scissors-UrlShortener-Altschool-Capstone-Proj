const express = require('express');
const router = express.Router();

const apiLimiter = require('../middlewares/utils');

const {
  fetchURLs,
  getIndexPage,
  getRandomURLPage,
  getCustomURLPage,
  makeShortUrl,
  shortUrlRedirect,
  generateCustomUrl,
} = require('../controllers/shortUrl.controller');

router.get('/', getIndexPage);
router.get('/fetch-urls', fetchURLs);
router.get('/random-url', apiLimiter, getRandomURLPage);
router.get('/custom-url', apiLimiter, getCustomURLPage);
router.post('/short-url', apiLimiter, makeShortUrl);
router.post('/custom-url', apiLimiter, generateCustomUrl);
router.get('/:code', shortUrlRedirect);

module.exports = router;
