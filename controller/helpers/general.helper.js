/**packages */

const CryptoJS = require("crypto-js");
const config = require("config");

/**encrypt pass */
exports.EncryptPassword= (password) =>{
    let secretkey = config.get("secretKeys.crytojs");
    let encryptedPasword = CryptoJS.AES.encrypt(password, secretkey).toString();
    return encryptedPasword
}; 

exports.DecryptPassword = (cryptedPassword) => {
    let secretkey = config.get("secretKeys.crytojs"); 
    let bytes  = CryptoJS.AES.decrypt(cryptedPassword, secretkey);
    var originalPass= bytes.toString(CryptoJS.enc.Utf8);
    return originalPass
}