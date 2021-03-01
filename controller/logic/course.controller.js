/**Dto */
const courseDto = require("../../model/dto/course.dto");
const config = require ("config");


exports.createCourse = (req, res, next) => {
    let course = {
        name : req.body.name,
        code : req.body.code
        
    };
    courseDto.create(course, (err, data)=>{
        if (err){
            return res.status(400).json(
                { 
                    error : err 
                }
            );
        }
        res.status(201).json({
            info:data
        });
    });
};



exports.updateCourse = (req, res, next) => {
    let course = {
        name : req.body.name,
        code : req.body.code
    };
    courseDto.update({_id: req.body.id}, course, (err, data)=>{
        if (err){
            return res.status(400).json(
                { 
                    error : err 
                }
            );
        }
        res.status(201).json(
            {
            info:data
        }
        );
    });
};


exports.getAll = (req, res, next) => {
    
    courseDto.getAll({},(err, data)=>{
        if (err){
            return res.status(400).json(
                { 
                    error : err 
                }
            );
        }
        res.status(200).json(
            {
            info:data
        }
        );
    });
};

exports.deleteCourse = () => {
    courseDto.delete({_id: req.body.id},(err, data)=>{
        if (err){
            return res.status(400).json(
                { 
                    error : err 
                }
            );
        }
        res.status(204).json();
    });
}