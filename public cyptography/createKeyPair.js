const crypto = require('crypto');
const fs = require('fs');

function genKeyPair(){
    //Generate an object where the keys are stored in properties 'privateKey' and 'publicKey'
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096, // bits= standard for RSA keys
        publicKeyEncoding: {
            type: 'pkcs1', // public key cryptography standards 1
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        }
    })

    //create the public key file
    fs.writeFileSync(__dirname + '/id_rsa_pub.pem', keyPair.publicKey);

    //create the private key file
    console.log(keyPair.privateKey);
    fs.writeFileSync(__dirname + '/id_rsa_priv.pem', keyPair.privateKey);
}
genKeyPair()