const config= require("config");
const url= config.get("db.url");

console.log("URL is", url)