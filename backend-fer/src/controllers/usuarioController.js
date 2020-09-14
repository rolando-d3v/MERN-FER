const UsuarioModel = require("../models/usuarioModel");
const _ = require("underscore");

//obtiene all usuarios
exports.getUsuarios = async (req, res, next) => {

  let limite = parseInt(req.query.limite) || 5; // convierte a un string a un numero primera forma

  let desde = req.query.desde || 0;
  desde = Number(desde); // convierte a un string a un numero segunda forma

  try {
    const usuario = await UsuarioModel.find({estado: true}, { password: 0 })
      .skip(desde) //salta desde que numeros de datos quieres ver los datos
      .limit(limite); // limita los datos que puedes obtener

      // mostrando la cantidad total de datos con conteo  y estado solo lo que estan en true
    await UsuarioModel.count({estado: true}, (err, conteo) => {
      res.json({
        ok: true,
        usuario,
        cuantos: conteo
      })
    })
    
  } catch (err) {
    res.send(err);
    next();
  }
};

// create usuarios
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

//runValidators de mongo, es para actualizar los valores deacuerdo al esquema de la db
exports.updateUsuario = async (req, res, next) => {
  //usando el underscore
  // el pick te retorno los valores que tu quieres actualizar
  let body = _.pick(req.body, ["nombre", "email", "img", "role", "estado"]);

  try {
    const usuario = await UsuarioModel.findByIdAndUpdate(
      { _id: req.params.IdUsuario },
      body,
      { new: true, runValidators: true }
    );
    res.json(usuario);
    // res.json({message: 'usuario update'})
  } catch (err) {
    res.send(err);
    next();
  }
};

//Elimina un usuario en forma de estado : false o true
exports.deleteUsuario = async (req, res, next) => {

  let cambiaEstado = { estado: false }

  try {
    const usuario = await UsuarioModel.findByIdAndUpdate({_id: req.params.IdUsuario}, cambiaEstado, {new: true} )
        res.json({
          ok: true,
          message: `usuario ${usuario.nombre} desactive successfully`
        }) 
    
  } catch (err) {
    res.send(err)
    next()
  }
}