//IMPORTS

const express = require('express')
const app = express();
require('./db/DBconnect.js');
const cors = require('cors');

//MODELS IMPORT STRUCTURES

app.use(express.json());

//IMPORTED RAUTERES

app.use(cors());

const routeradmin = require("./routers/router_usuarios.js")
app.use(routeradmin);

const routermain = require("./routers/main.js")
app.use(routermain);

const routertrailer = require('./routers/router_trailers.js')
app.use(routertrailer);

//PORT CONFIG

const PORT = process.env.PORT || 4040

app.listen(PORT, (req, res) => {
    console.log(`the server is http://localhost:${PORT}`)
})