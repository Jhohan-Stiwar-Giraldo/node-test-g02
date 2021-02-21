/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**creation */

const studentSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true

    },
    lastname :{
        type: "String",
        required: true
    },
    username:{
        type: "String",
        require: true,
        unique: true
    },
    password:{
        type:"String",
        required: "true"
    },
    role :{
        type: "Number",
        required: true
    },
    
});


/**exports */
studentSchema.plugin(validator);
module.exports = studentSchema;