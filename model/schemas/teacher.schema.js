/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**creation */

const teacherSchema = new mongoose.Schema({
    document:{
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
        type:"String",
        required: "true"
    },
    office:{
        type:"String",
        required: "true"
    },
    deparment:{
        type:"String",
        required: "true"
    }

});


/**exports */
teacherSchema.plugin(validator);
module.exports = teacherSchema;