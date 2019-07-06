var CryptoJS = require("crypto-js");

function encrypt(msg, key) {
    return CryptoJS.AES.encrypt(JSON.stringify(msg), key).toString();
}

function decrypt(msg, key) {
    return JSON.parse(CryptoJS.AES.decrypt(msg, key).toString(CryptoJS.enc.Utf8));
}

module.exports = { encrypt, decrypt }