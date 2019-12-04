const {setupInput} = require('./input');
const {connect} = require('./client');
/**
 * Establishes connection with the game server
 */
console.log('Connecting ...');
const conn = connect();
setupInput(conn);
