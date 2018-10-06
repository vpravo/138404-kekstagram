"use strict";

const {author} = require(`../package`);
const {printCommand} = require(`./utils`);

module.exports = {
  name: `author`,
  description: `Print author name`,
  execute() {
    printCommand(author);
  }
};
