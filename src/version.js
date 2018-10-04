'use strict';
const {version} = require(`../package`);

module.exports = {
  name: `version`,
  description: `Print version of the project`,
  execute() {
    console.log(version);
  }
};
