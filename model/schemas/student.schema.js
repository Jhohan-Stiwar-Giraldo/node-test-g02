/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**creation */

const studentSchema = new mongoose.Schema({
    code:{
        type:"String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true

    },
    lastname :{
        type: "String",
        required: true
    },
    email:{
        type: "String",
        require: true,
        unique: true
    },
    phone:{
        type: "Number",
        required: true,
        unique: true
    },
    career:{
        type:"String",
        required: "true"
    }
});


/**exports */
studentSchema.plugin(validator);
module.exports = studentSchema;