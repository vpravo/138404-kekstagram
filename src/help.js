"use strict";

const getCommandsList = (list) => {
  let result = [``];

  for (let item in list) {
    if (list.hasOwnProperty(item)) {
      result.push(` --${list[item].name} — ${list[item].description}`);
    }
  }

  return result.join(`\n`);
};

module.exports = {
  name: `help`,
  description: `Print avalibable commands`,
  execute(commands) {
    console.log(`Available commands: ${getCommandsList(commands)}`);
  }
};
