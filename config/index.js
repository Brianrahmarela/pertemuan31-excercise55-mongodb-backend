const {MONGODB_LIVE, JWT_KEY, PORT} = require('./environment')
const dbConfigMongo = require('./db')

module.exports = {
  PORT, 
  MONGODB_LIVE,
  JWT_KEY,
  dbConfigMongo,
};