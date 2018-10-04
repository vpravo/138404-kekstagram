'use strict';

const {author} = require(`../package`);

module.exports = {
  name: `author`,
  description: `Print author name`,
  execute() {
    console.log(author);
  }
};
