"use strict";
const {printCommandError} = require(`./utils`);

module.exports = {
  name: `error`,
  description: `Shows error message`,
  execute(unknownCommand) {
    printCommandError(
        `Unknown command: ${unknownCommand}. Try "--help" to view available commands`
    );
  }
};
