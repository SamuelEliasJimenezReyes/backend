const mongoose = require('mongoose');

const TrailersScheme = new mongoose.Schema({

    Nombre: {
        type: String,
        require: true,
        trim: true,
    },
    fecha_lanzamiento: {
        type: String,
        require: true,
        trim: true,
    },
    Director: {
        type: String,
        require: true,
        trim: true,
    },
    Generos: {
        type: [String],
        require: true,
    },
    Rate: {
        type: String,
        require: true,
        trim: true,
    },
    Image: {
        type: String,
        require: true,
        trim: true
    }
})

const trailers = mongoose.model('trailer', TrailersScheme)

module.exports = trailers;