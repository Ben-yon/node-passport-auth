const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const fs = require('fs');
const encrypt = require('./encrypt');

const myData = {
    firstName: 'Benjamin',
    lastName: 'Ikeh',
    socialSecurityNumber:"NO NO NO, Neer put your personal info in a digitally signed message since this form of cryptography does not hide the date!"
};

// only the string version data can be hashed.
const stringifiedData = JSON.stringify(myData);

// sets the value on the hash object requires string format, so we must convert our object
hash.update(stringifiedData);

//hashed data in Hexidecimal format.
const hashData = hash.digest('hex');

const senderPrivateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

const signedMessage = encrypt.encryptWithPrivateKey(senderPrivateKey, hashData);

const packageOfDataToSend = {
     algorithm: 'sha256',
     originalData: myData,
     signedAndEncryptedData: signedMessage
};

module.exports.packageOfDataToSend = packageOfDataToSend;