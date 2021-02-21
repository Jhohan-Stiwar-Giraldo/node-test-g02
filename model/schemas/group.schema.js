/** packages */
const mongoose = require("mongoose");

/**creation */

const groupSchema = new mongoose.Schema({
    course_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_course"
    },
    
    teacher_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_teacher"
    },
    period_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_period"
    },
    number: {
        type: "Number",
        required: true
    }
    
});


/**exports */
module.exports = groupSchema;