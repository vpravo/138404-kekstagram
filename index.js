"use strict";

const commands = {
  author: require(`./src/author`),
  license: require(`./src/license`),
  description: require(`./src/description`),
  version: require(`./src/version`),
  help: require(`./src/help`),
  empty: require(`./src/empty`)
};

const {help} = commands;
help.execute = help.execute.bind(help, commands);


/* const outputText = (textValue) => console.log(textValue);
const outputTextError = (textValue) => console.error(textValue);
const exitSucces = () => process.exit(0);
const readCommandProcess = () => process.argv[2];
const exitFail = () => process.exit(1);

if (process.argv.length === 2) {
  outputText(textWithoutComands);
  exitSucces();
} else if (commands[readCommandProcess()]) {
  outputText(commands[readCommandProcess()]);
  exitSucces();
} else {
  outputTextError(textUnkownCommand);
  exitFail();
} */
