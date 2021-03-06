/**packages */
const express = require("express");
const config = require ("config");
const bodyParser = require("body-parser");

 /**app settings */
 const port = config.get("server-port")
 const app = express();
 const jsonParser = bodyParser.json();
 const urlEncodeParser = bodyParser.urlencoded (
     {extended: true}
 );

 app.use(jsonParser);
 app.use(urlEncodeParser);

 const ipFn  = require("./middleware/getIpAddress");
 app.use("*",ipFn);

/**methods */
app.get("/", (req, res, next) =>{
    res.send("Welcome to rest api");
});

//user routes loading
const UserRoutes = require("./routes/course.routes");
UserRoutes(app); 

//token middleware
tkFn=require("./middleware/verifyToken");
app.use(tkFn);

//students routes
const StudentRoutes = require("./routes/student.routes");
StudentRoutes(app);

//teacher routes loading
const TeacherRoutes = require("./routes/teacher.routes");
TeacherRoutes(app); 

// preiod loading
const PeriodRoutes = require("./routes/period.routes");
PeriodRoutes(app); 

//course routes loading
const CourseRoutes = require("./routes/course.routes");
CourseRoutes(app); 


 app.listen(port, ()=>{
    console.log("server is running...")
 });