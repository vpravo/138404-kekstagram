'use strict';

const {printCommandError, exitWithError} = require(`./utils`);
const {red} = require(`colors/safe`);

module.exports = {
  name: `error`,
  description: `Shows error message`,
  execute(unknownCommand) {
    printCommandError(
        `Unknown command: ${red(
            unknownCommand
        )}. Try "--help" to view available commands`
    );
    exitWithError();
  }
};
