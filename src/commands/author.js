'use strict';

const {author} = require(`../../package`);
const {printCommand} = require(`./utils`);
const colors = require(`colors/safe`);


module.exports = {
  name: `author`,
  description: `Print author name`,
  execute() {
    printCommand(colors.yellow(author));
  }
};
