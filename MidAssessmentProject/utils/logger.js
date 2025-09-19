const pino = require('pino');

const dev = process.env.NODE_ENV !== 'production';

let logger;

if (dev) {
    logger = pino({
        level: process.env.LOG_LEVEL || 'info',
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,              
                translateTime: 'SYS:standard', 
                ignore: 'hostname,pid',    
            }
        }
    });
} else {
    logger = pino({
        level: process.env.LOG_LEVEL || 'debug'
    });
}

module.exports = logger;
