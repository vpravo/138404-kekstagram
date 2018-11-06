'use strict';

const {printCommand, exitSucces} = require(`./utils`);
const {gray, green} = require(`colors/safe`);

const getCommandsList = (list) => {
  let result = [``];

  for (let item in list) {
    if (list.hasOwnProperty(item)) {
      result.push(
          `--${gray(list[item].name)} — ${green(list[item].description)}`
      );
    }
  }

  return result.join(`\n`);
};

module.exports = {
  name: `help`,
  description: `Print avalibable commands`,
  execute(commands) {
    printCommand(`Доступные команды: ${getCommandsList(commands)}`);
    exitSucces();
  }
};
