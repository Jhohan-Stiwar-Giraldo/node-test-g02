/** packages */
const mongoose = require("mongoose");

/**creation */

const courseSchema = new mongoose.Schema({
    code:{
        type:"String",
        required: true
    },
    name:{
        type: "String",
        required: true
    }
});


/**exports */
module.exports = courseSchema;