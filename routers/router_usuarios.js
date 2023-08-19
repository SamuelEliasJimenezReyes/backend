//IMPORTS

const express = require('express');
const admin = require('../models/admin');
const routeradmin = new express.Router();
const trailer = require("../models/trailersmd")

//POST

routeradmin.post('/api/send/admin', async (req, res) => {

    const adminuser = new admin(req.body);

    try {
        await adminuser.save();
        res.status(201).send();
        console.log('El objeto fue enviado correctamente');
    }
    catch (error) {
        res.status(400).send(error);
        console.log('El objeto no pudo ser creado...');
    }
})

//GET 

routeradmin.get('/api/admin', async (req, res) => {
    try {
        const adminuser = await admin.find({})
        res.send(adminuser);
    }
    catch (error) {
        res.status(500).send(error);
    }
})

//GET BY ID

routeradmin.get('/api/admin/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const adminuser = await admin.find({ _id })

        if (!adminuser) {
            return res.status(404).send()
        }
        res.send(adminuser);
    }
    catch (error) {
        res.status(500).send();
    }
})

// DELETE TRAILER 

routeradmin.delete('/api/trailer/:Nombre', async (req, res) => {
    const Nombre = req.params.Nombre;


    try {
        const deletedTrailer = await trailer.findOneAndRemove({ Nombre });

        if (!deletedTrailer) {
            return res.status(404).send();
        }

        res.send(deletedTrailer);
    } catch (error) {
        res.status(500).send();
    }
});

//Login

routeradmin.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (user) {
            const token = jwt.sign({ email }, secretKey);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Error del servidor' });
    }
});

module.exports = routeradmin;
