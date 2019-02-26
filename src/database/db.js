'use strict';

const {MongoClient} = require(`mongodb`);

const {name} = require(`../../package`);

const logger = require(`../logger`);
const {exitWithError} = require(`../commands/utils`);

const {
  DB_HOST = `localhost:27017`
  // DB_USER,
  // DB_PASS,
} = process.env;

const URL = `mongodb://${DB_HOST}/`;

module.exports = MongoClient.connect(
    URL,
    {
      useNewUrlParser: true
    }
)
  .then((client) => client.db(name))
  .catch((err) => {
    logger.error(`Failed to connect BD`, err);
    exitWithError();
  });
