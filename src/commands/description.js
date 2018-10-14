'use strict';

const {description} = require(`../../package`);
const {printCommand} = require(`./utils`);

const colors = require(`colors/safe`);

module.exports = {
  name: `description`,
  description: `Print description of the project`,
  execute() {
    printCommand(colors.cyan(description));
  }
};
