'use strict';

const {printCommandError} = require(`./utils`);
const colors = require(`colors/safe`);

module.exports = {
  name: `error`,
  description: `Shows error message`,
  execute(unknownCommand) {
    printCommandError(
        `Unknown command: ${colors.red(unknownCommand)}. Try "--help" to view available commands`
    );
  }
};
