const net = require('net');
const { IP, PORT, Name } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${Name}`);
  });
  return conn;
};

module.exports = { connect };