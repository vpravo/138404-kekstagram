'use strict';

const server = require(`../server`);

module.exports = {
  name: `server`,
  description: `Start server on choising port, by default 3000`,
  execute(port) {
    server.start(port);
  }
};
