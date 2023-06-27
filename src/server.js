const http = require('http');
const app = require('./app');
const Cache = require('./database/redis_connect');
require('dotenv').config();

const mongoDB_connection = require('./database/db_connect');

const PORT = process.env.PORT || 8000;

// creating the server using the app object
const server = http.createServer(app);

// connect to database and start server
async function startServer() {
  // connection to mongodb database
  await mongoDB_connection();

  // connection to redis
  Cache.connect();
  server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}
startServer();
