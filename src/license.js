'use strict';
const {license} = require(`../package`);

module.exports = {
  name: `license`,
  description: `Print license of the project`,
  execute() {
    console.log(license);
  }
};
