const winston = require('winston');
const { combine, timestamp, printf, colorize, align } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: 'DD-MM-YYYY hh:mm:ss.SSS A',
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
    //new winston.transports.File({ filename: 'logs/test.log' })
  ],
});

//module.exports = logger;

logger.info('Info message');
logger.error('Error message');
logger.warn('Warning message');

