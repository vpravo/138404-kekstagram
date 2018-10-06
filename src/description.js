"use strict";
const {description} = require(`../package`);
const {printCommand} = require(`./utils`);

module.exports = {
  name: `description`,
  description: `Print description of the project`,
  execute() {
    printCommand(description);
  }
};
