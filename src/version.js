"use strict";
const {version} = require(`../package`);
const {printCommand} = require(`./utils`);
const colors = require(`colors/safe`);

const colorsList = [
  `red`, // major
  `green`, // minor
  `blue` // patch
];

const colorize = (string) =>
  string
    .split(`.`)
    .map((value, i) => colors[colorsList[i]](value))
    .join(`.`);

module.exports = {
  name: `version`,
  description: `Print version of the project`,
  execute() {
    printCommand(colorize(version));
  }
};
