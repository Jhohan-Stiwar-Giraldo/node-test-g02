/**packages */

const CryptoJS = require("crypto-js");
const config = require("config");

/**encrypt pass */
exports.EncryptPassword= (password) =>{
    let secretkey = config.get("secretKeys.crytojs");
    let encryptedPasword = CryptoJS.AES.encrypt(password, secretkey).toString();
    return encryptedPasword
}; 