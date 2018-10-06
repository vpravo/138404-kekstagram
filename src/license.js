"use strict";
const {license} = require(`../package`);
const {printCommand} = require(`./utils`);
const colors = require(`colors/safe`);

module.exports = {
  name: `license`,
  description: `Print license of the project`,
  execute() {
    printCommand(colors.magenta(license));
  }
};
