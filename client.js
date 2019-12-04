const net = require('net');
const {ip, port} = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: ip,
    port: port
  });
  conn.on('connect',() => {
    console.log('Successfully connected')
  });
  conn.on('connect',() => {
    console.log('Name: USB');
  });
  conn.on('connect',() => {
  setTimeout(function(){conn.write('Move: up'), 2000;});

  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}



module.exports = {connect};