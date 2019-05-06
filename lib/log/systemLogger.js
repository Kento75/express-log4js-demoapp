const logger = require("./logger").system;

module.exports = (options) => (err, req, res, next) => {
  logger.error(err.message);
  next(err);
}