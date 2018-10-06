"use strict";

module.exports = {
  printCommand(textValue) {
    console.log(textValue);
  },
  printCommandError(textValue) {
    console.error(textValue);
  },
  exitSucces() {
    process.exit(0);
  },
  exitFail() {
    process.exit(1);
  },
  readCommandProcess() {
    return process.argv[2];
  },
};
