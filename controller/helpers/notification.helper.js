exports.sentSMS = async (phone) =>{
    let code = math.random(10);
    console.log(`sending sms with code ${code} to phone ${phone}`);
}