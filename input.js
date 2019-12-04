let connection; 

const setupInput = function(conn) {
  connection = conn;
  function handleUserInput(data) {
    if (data === '\u0003') {
      process.exit();
    }
    if (data === 'w') {
      conn.write('Move: up');
    }
    if (data === 's') {
      conn.write('Move: down');
    }
    if (data === 'a') {
      conn.write('Move: left');
    }
    if (data === 'd') {
      conn.write('Move: right');
    }
    if (data === 'q') {
      conn.write('Say: Yoyoyo');
    }
  };
  const stdin = process.stdin;
  stdin.on('data', data => {
    handleUserInput (data);
  })
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

module.exports = {setupInput};