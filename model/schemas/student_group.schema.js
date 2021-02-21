/** packages */
const mongoose = require("mongoose");

/**creation */

const StudentGroupSchema = new mongoose.Schema({
    student_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_student"
    },
    
    group_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_group"
    }
});


/**exports */
module.exports = StudentGroupSchema;