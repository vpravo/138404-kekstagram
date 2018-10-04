'use strict';
const {description} = require(`../package`);

module.exports = {
  name: `description`,
  description: `Print description of the project`,
  execute() {
    console.log(description);
  }
};
