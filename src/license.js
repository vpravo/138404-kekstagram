"use strict";
const {license} = require(`../package`);
const {printCommand} = require(`./utils`);

module.exports = {
  name: `license`,
  description: `Print license of the project`,
  execute() {
    printCommand(license);
  }
};
