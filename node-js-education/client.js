'use strict';

const tls = require('tls');
const fs = require('fs');
const PORT = 1337;
const HOST = '127.0.0.1'
// Pass the certs to the server and let it know to process even unauthorized certs.
const options = {
  key: fs.readFileSync('conf/private-key.pem'),
  cert: fs.readFileSync('conf/public-cert.pem'),
  rejectUnauthorized: false
};
const client = tls.connect(PORT, HOST, options, function () {
  // Check if the authorization worked
  if (client.authorized) {
    console.log("Connection authorized by a Certificate Authority.");
  } else {
    console.log("Connection not authorized: " + client.authorizationError)
  }
  // Send a friendly message
  client.write("I am the client sending you a message.");
});