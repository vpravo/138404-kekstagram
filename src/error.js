"use strict";

module.exports = {
  name: `error`,
  description: `Shows error message`,
  execute(unknownCommand) {
    console.log(`Unknown command: ${unknownCommand}. Try "--help" to view available commands`);
  }
};
