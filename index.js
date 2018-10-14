"use strict";

const {
  exitSucces,
  exitWithError,
  readCommandProcess
} = require(`./src/commands/utils`);

const {Readline} = require(`./src/readline`);

const emptyCommand = require(`./src/commands/empty`);
const errorCommand = require(`./src/commands/error`);

const commands = {
  "--author": require(`./src/commands/author`),
  "--license": require(`./src/commands/license`),
  "--description": require(`./src/commands/description`),
  "--version": require(`./src/commands/version`),
  "--help": require(`./src/commands/help`)
};

const {"--help": help} = commands;
help.execute = help.execute.bind(help, commands);

if (process.argv.length === 2) {
  emptyCommand.execute();
  new Readline().init();
}

if (readCommandProcess()) {
  try {
    commands[readCommandProcess()].execute();
    exitSucces();
  } catch (err) {
    errorCommand.execute(readCommandProcess());
    exitWithError();
  }
}
