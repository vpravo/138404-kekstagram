'use strict';

const {
  printCommand
} = require(`../commands/utils`);

class ValidateError extends Error {
  constructor(errors) {
    super(`Data validation error`);
    this.code = 400;
    this.errors = errors;
    printCommand(errors);
  }
}

module.exports = ValidateError;
