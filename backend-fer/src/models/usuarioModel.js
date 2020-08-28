const {Schema, model} = require('mongoose');

const rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido '
}


const usuarioSchema = new Schema({
    nombre: {
        type:  String,
        trim: true,
        required: [true, 'el nombre es necesario' ]
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'el email es necesario']
    },
    password:{
        type: String,
        required: [true, 'el password es incorrecto']
    },
    img: {
        type:String, 
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true

    },
    google: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = model('Usuario', usuarioSchema)

