//IMPORTS

const express = require('express');
const trailers = require('../models/trailersmd')
const routertrailer = new express.Router();

//POST

routertrailer.post('/api/trailers', async (req, res) => {


    const Harry_trailer = new trailers(req.body);

    try {
        await Harry_trailer.save()
        res.status(201).send()
        console.log('El objeto fue enviado correctamente')
    }
    catch (error) {
        res.status(400).send(error)
        console.log('El objeto no pudo ser creado...')
    }
})

//GET 

routertrailer.get('/api/get/trailers', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    try {
        const Trailers = await trailers.find({})
        res.send(Trailers);
    }
    catch (error) {
        res.status(500).send(error);
    }
})

//GET BY ID

routertrailer.get('/api/trailers/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const Trailers = await trailers.find({ _id })

        if (!Trailers) {
            return res.status(404).send()
        }
        res.send(Trailers);
    }
    catch (error) {
        res.status(500).send();
    }
})

module.exports = routertrailer;