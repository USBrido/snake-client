const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
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