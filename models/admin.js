const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true,  // Cambio: "require" -> "required"
        trim: true,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
            },
            message: 'Correo electrónico no valido',
        },
    },
    Password: {
        type: String,
        required: true,
        trim: true,
        minlenght: 5,
        validate: {
            validator: function (value) {
                if (value.includes('123456' && '654321')) {
                    throw new Error('Contraseña insegura');
                }
                return true;
            },
        },
    },
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;
