const controller = require("../controller/logic/user.controller");


module.exports = (app) =>{
    
    app.get("/user",(req, res, next) => {
        controller.getAll(req, res, next);
    });
    
    app.post("/user",(req, res, next) => { //asì cuando le envio el metodo post, la app sabe que va para el login
        controller.login(req, res, next);
    });
};