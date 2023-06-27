const rateLimiter = require('express-rate-limit');

const apiLimiter = rateLimiter({
  windowMs: 7 * 60 * 1000, // 7 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    msg: 'This IP address has made 5 requests. Try again after 7 minutes.',
  },
});

module.exports = apiLimiter;
