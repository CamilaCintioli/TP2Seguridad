let QuickEncrypt = require('quick-encrypt')

function encrypt(msg, publicKey) {
    return QuickEncrypt.encrypt(JSON.stringify(msg), publicKey)
}

function decrypt(msg, privateKey) {
    return JSON.parse(QuickEncrypt.decrypt(msg, privateKey))
}

module.exports = {encrypt,decrypt}