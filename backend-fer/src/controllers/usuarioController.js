const UsuarioModel = require('../models/usuarioModel');


exports.getUsuarios = (req, res, next) => {
    res.json({message: 'hola'})
}


exports.postUsuario = async (req, res, next) => {
    try {
       const usuario = new UsuarioModel(req.body)
       await usuario.save()
       res.json({message: 'usuario created successfully'})
    } catch (error) {
        if(error.code === 11000){
            res.json({message: 'el email debe ser unico'})
        }
        res.send(error)
        next()
    }
}