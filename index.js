'use strict';

require(`dotenv`).config();
const {
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
  "--help": require(`./src/commands/help`),
  "--fill": require(`./src/commands/fill`),
  "--server": require(`./src/commands/server`)
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
  } catch (err) {
    errorCommand.execute(readCommandProcess());
  }
}
