const { movementKeys, messages } = require('./constants');

let connection; // Stores the active TCP connection object.

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (movementKeys[key]) {
    connection.write(movementKeys[key]);
  }
  if (messages[key]) {
    connection.write(messages[key]);
  }
};

module.exports = { setupInput };