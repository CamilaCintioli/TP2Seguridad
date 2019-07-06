let QuickEncrypt = require('quick-encrypt')

let keys = QuickEncrypt.generate(2048) // Use either 2048 bits or 1024 bits.

console.log(keys.public) // Public Key that has been generated.

console.log(keys.private) // Private Key that has been generated.
