const winston = require("winston");
const { combine, timestamp, printf, colorize, align } = winston.format;

export const logger = winston.createLogger({
  level: "verbose",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "hh:mm:ss.SSS A YYYY-MM-DD",
    }),
    align(),
    printf(
      (info: { timestamp: any; level: any; message: any }) =>
        `[${info.timestamp}] ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console({ level: "info" }),
    new winston.transports.File({ filename: "logs/info.log" }),
  ],
});
