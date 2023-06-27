const Redis = require('redis');
require('dotenv').config();

const REDIS_USERNAME = process.env.REDIS_USERNAME;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;

class Cache {
  constructor() {
    this.redis = null;
  }

  async connect() {
    this.redis = await Redis.createClient({
      url: `redis://${REDIS_USERNAME}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`,
    });
    this.redis.connect();

    this.redis.on('connect', () => {
      console.log('Redis connection is established.');
    });

    this.redis.on('error', () => {
      console.log("Oops! Couldn't connect to Redis. Try again!");
    });
  }
}

const instance = new Cache();
module.exports = instance;
