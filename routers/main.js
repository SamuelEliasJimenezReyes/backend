const express = require("express");
const app = express();
const routermain = new express.Router();
// Crea una instancia de Express

// Configura el motor de plantillas Handlebars
app.set("view engine", "hbs");

routermain.get('/',(req,res) =>{
    res.end("Pagina principal");
});


module.exports = routermain;
