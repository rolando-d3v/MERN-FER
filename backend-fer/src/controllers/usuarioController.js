const UsuarioModel = require("../models/usuarioModel");
const _ = require('underscore');

exports.getUsuarios = async (req, res, next) => {
  try {
    const usuario = await UsuarioModel.find({}, { password: 0 });
    res.json(usuario);
  } catch (err) {
    res.send(err);
    next();
  }
};

exports.postUsuario = async (req, res, next) => {
  try {
    const usuario = new UsuarioModel(req.body);
    usuario.password = await usuario.encryptPassword(usuario.password);
    await usuario.save();
    res.json({ message: "usuario created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      res.json({ message: "el email debe ser unico" });
    }
    res.send(error);
    next();
  }
};

//runValidators es para actualizar los valores deacuerdo al esquema de la db
exports.updateUsuario = async (req, res, next) => {
  try {
    const usuario = await UsuarioModel.findByIdAndUpdate(
      { _id: req.params.IdUsuario },
      req.body,
      { new: true, runValidators: true }
    );
    res.json(usuario)
    // res.json({message: 'usuario update'})
  } catch (err) {
    res.send(err);
    next();
  }
};
