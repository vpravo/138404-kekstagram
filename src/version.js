"use strict";
const {version} = require(`../package`);
const {printCommand} = require(`./utils`);

module.exports = {
  name: `version`,
  description: `Print version of the project`,
  execute() {
    printCommand(version);
  }
};
