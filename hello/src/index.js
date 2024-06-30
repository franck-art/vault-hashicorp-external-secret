const express = require('express');
const winston = require('winston');

// Env vars
const port = process.env.PORT;
const vault_hello_host = process.env.VAULT_HELLO_HOST
const vault_hello_port = process.env.VAULT_HELLO_PORT


// Logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {
    app: 'hello',
    version: '1.0.0'
  }
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Webserver
const app = express();
app.get('/hello', (req, res) => res.send('Hello'));
app.listen(port, () => logger.info(
  `Hello application started (http://localhost:${port}/)`,
  {port}
));
