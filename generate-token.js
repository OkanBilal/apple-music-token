const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// Your Music Kit Key information
const keyId = '';
const teamId = '';
const privateKeyPath =  'private/AuthKey.p8' 

// Load the private key
const privateKey = fs.readFileSync(path.resolve(privateKeyPath));

// Create a function to generate the token
async function generateAppleMusicToken() {
  const currentTime = Math.floor(Date.now() / 1000);
  const tokenExpiration = currentTime + 15777000; 

  const payload = {
    iss: teamId,
    iat: currentTime,
    exp: tokenExpiration,
  };

  const signOptions = {
    algorithm: 'ES256',
    keyid: keyId,
  };

  const token = jwt.sign(payload, privateKey, signOptions);

  return token;
}

generateAppleMusicToken()
  .then((token) => {
    console.log(token);
  })
  .catch((error) => {
    console.error(error);
  });
