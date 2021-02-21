/**packages */

const mongoose = require("mongoose");
const config = require("config");

const mongodbInfo = config.get("db-connections.mongodb");




//user: rest_api_user
//pass: awIrwoKM9URSbDLo
const connStr  = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majoritymongodb+srv://rest_api_user:<password>@cluster0.1ef1m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(connStr);
    mongoose.connection.on("connected", () => {
        console.log ("mongoDB server Connected");
    });

    mongoose.connection.on("disconnected", () => {
        console.log ("mongoDB server error");
    });

    mongoose.connection.on("error", () => {
        console.log ("mongoDB server error");
    });

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close ( ()=>{
            console.log ("mongoDB server shuting down");
        });
    });
}