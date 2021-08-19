const { connect } = require('./client');
console.log('Connecting ...');
connect();
//Handles user input

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

/* const handleUserInput = function() {
  stdin.on('data', (key) => {
    console.log("input recvied");
    if (key === '\u0003') {
      console.log("exiting");
      process.exit();
    }
  });
}; */

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("exiting");
    process.exit();
  }
};

setupInput();
