"use strict";
const {author, name} = require(`../package`);

module.exports = {
  name: `helloUser`,
  description: `Shows program help`,
  execute() {
    console.log(
        `Hello user!\n${`This program will start «${name}» server.\nAuthor: ${author}.`}`
    );
  }
};
