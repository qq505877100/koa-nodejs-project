const { ErrorCode } = require('../constants/customErrorCode');

class CatchException extends Error {
  constructor(message, code, status) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

class ParamsErrorException extends CatchException {
  constructor(msg, code) {
    super(msg, code, 400);
  }
}

module.exports = {
  CatchException,
  ParamsErrorException,
};
