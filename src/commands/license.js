'use strict';

const {license} = require(`../../package`);
const {printCommand, exitSucces} = require(`./utils`);
const {magenta} = require(`colors/safe`);


module.exports = {
  name: `license`,
  description: `Print license of the project`,
  execute() {
    printCommand(magenta(license));
    exitSucces();
  }
};
