/**packages */

const CryptoJS = require("crypto-js");
const config = require("config");
const jwt = require("jsonwebtoken");

/**encrypt pass */
exports.EncryptPassword= (password) =>{
    let secretkey = config.get("secretKeys").crytojs;
    let encryptedPasword = CryptoJS.AES.encrypt(password, secretkey).toString();
    return encryptedPasword
}; 

exports.DecryptPassword = (cryptedPassword) => {
    let secretkey = config.get("secretKeys").crytojs; 
    let bytes  = CryptoJS.AES.decrypt(cryptedPassword, secretkey);
    var originalPass= bytes.toString(CryptoJS.enc.Utf8);
    return originalPass
}
exports.GenerateToken = (user) =>{
    let secretkey = config.get("secretKeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            username: user.username,
            id :  user._id,
            role : user.role
        }
      }, secretkey);
      return token;
}