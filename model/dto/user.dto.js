/**packages */

const mongoose = require("mongoose");

/**schemas */

const schema = require("../schemas/user.schema");

schema.statics = {
    create: function (data, cb){
        let doc = new this(data);
        doc.save(cb); 
    },
    
    getAll: function (query, cb){
        this.find(query, cb); 
    },
     
    getByCode: function (query, cb){
        this.find(query, cb); 
    },
    
    login: function (query, cb){
        this.find(query, cb); 
    },
    update : function (query,data,cd){
        this.update(query, {$set:data}, {new: true}, cb);
    },
    delete: function(query,cb){
        this.delete(query);
    }
};

const dto = mongoose.model("coll_user", schema);
module.exports = dto;