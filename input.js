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
  switch (key) {
  case '\u0003':
    process.exit();
    break;
  case 'w':
    connection.write("Move: up");
    break;
  case 'a':
    connection.write("Move: left");
    break;
  case 's':
    connection.write("Move: down");
    break;
  case 'd':
    connection.write("Move: right");
    break;
  case 'z':
    connection.write("Say: YES!");
    break;
  case 'x':
    connection.write("Say: Too Slow!");
    break;
  case 'c':
    connection.write("Say: Keep Up!");
    break;
  }
};

module.exports = { setupInput };