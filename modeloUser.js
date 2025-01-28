const mongoose = require('mongoose');

// ESQUEMA
const InvitadoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,  // Cambiar a String para capturar números de teléfono que pueden contener símbolos
            required: true
        },
        email: {
            type: String,
            required: true
        },
        children: {
            type: Number,
            default: 0     // Valor por defecto si no se especifica
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

// MODELO
const Invitado = mongoose.model('Invitado', InvitadoSchema);

module.exports = Invitado;
