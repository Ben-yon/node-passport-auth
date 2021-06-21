const fs = require('fs');
const encrypt  = require('./encrypt');
const decrypt = require('./decrypt');


const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

// Store buffer object
const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, 'Super secret message');

// if you try and crack the code, you will just get gibberish
console.log(encryptedMessage.toString());

const privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

const decryptedMessage = decrypt.decryptWithPrivateKey(privateKey, encryptedMessage);

console.log(decryptedMessage.toString());