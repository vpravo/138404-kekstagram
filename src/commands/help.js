'use strict';

const {printCommand} = require(`./utils`);
const colors = require(`colors/safe`);

const getCommandsList = (list) => {
  let result = [``];

  for (let item in list) {
    if (list.hasOwnProperty(item)) {
      result.push(`--${colors.gray(list[item].name)} — ${colors.green(list[item].description)}`);
    }
  }

  return result.join(`\n`);
};

module.exports = {
  name: `help`,
  description: `Print avalibable commands`,
  execute(commands) {
    printCommand(`Available commands: ${getCommandsList(commands)}`);
  }
};
