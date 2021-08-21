const IP = '10.0.2.15';
const PORT = 50541;
const Name = "CHZ";

const movementKeys = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

const messages = {
  z: "Say: YES!",
  x: "Say: Too slow!",
  c: "Say: Keep Up!",
  v: "Say: GG"
};

module.exports = {
  IP,
  PORT,
  Name,
  movementKeys,
  messages
};