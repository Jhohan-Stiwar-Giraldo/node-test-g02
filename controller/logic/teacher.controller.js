/**Dto */
const teacherDto = require("../../model/dto/teacher.dto");
const userDto = require("../../model/dto/user.dto");
const config = require ("config");

/**encrytp  helper*/

const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

exports.createTeacher = (req, res, next) => {
    let teacher = {
        document : req.body.document,
        name : req.body.name,
        lastname : req.body.lastname,
        email : req.body.email,
        phone : req.body.phone,
        office : req.body.office,
        deparment: req.body.deparment
    };
    teacherDto.create(teacher, (err, data)=>{
        if (err){
            return res.status(400).json(
                { 
                    error : err 
                }
            );
        }
        let r = config.get("roles").teacher;
        let user = {
            name : teacher.name,
            lastname : teacher.lastname,
            username : teacher.code,
            password : helper.EncryptPassword(req.body.password),
            role: r 
        };
        userDto.create(user, (err ,u)=>{ // u=user
            if(err){
                teacherDto.delete({_id: data.id}, (e, data) =>{
                    
                    return  res.status(400).json(
                        { 
                            error : err 
                        }
                    );
                });
            }
            notHelper.sentSMS(teacher.phone);
            res.status(201).json({
                info:data
            });
        });
    });
};



exports.updateTeacher = (req, res, next) => {
    let teacher = {
        document : req.body.document,
        name : req.body.name,
        lastname : req.body.lastname,
        email : req.body.email,
        phone : req.body.phone,
        office : req.body.office,
        deparment: req.body.deparment
    };
    teacherDto.update({_id: req.body.id}, teacher, (err, data)=>{
        if (err){
            return res.status(400).json(
                { 
                    error : err 
                }
            );
        }
        
        if(req.body.olddocument != undefined ){
            let r = config.get("roles").teacher;
            let user = {
                name : teacher.name,
                lastname : teacher.lastname,
                username : teacher.code,
                password : helper.EncryptPassword(req.body.password),
                role: r 
            };
            userDto.update({username:req.body.olddocument },user, (err,u)=>{ // u=user
                if(err){                      
                    return  res.status(400).json(
                        { 
                            error : err 
                        }
                    );
                }
                notHelper.sentSMS(teacher.phone);
                res.status(201).json({
                    info:data
                });
            });
        }else {
            res.status(201).json(
                {
                info:data
            }
            );
        }
    });
};

exports.getAll = (req, res, next) => {
    
    teacherDto.getAll({},(err, data)=>{
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



exports.getByDocument = (req, res, next) => {
    
    teacherDto.getByDocument({document: req.params.document},(err, data)=>{
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

exports.deleteTeacher = () => {
    teacherDto.delete({_id: req.body.id},(err, data)=>{
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