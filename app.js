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
    res.send("Welcome to academic rest api")
});

//students routes
const StudentRoutes = require("./routes/student.routes");
StudentRoutes(app);

//teacher routes loading
const TeacherRoutes = require("./routes/teacher.routes");
StudentRoutes(app); 

 app.listen(port, ()=>{
    console.log("server is running...")
 });