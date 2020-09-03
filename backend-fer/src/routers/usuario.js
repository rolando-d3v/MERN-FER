const { Router } = require("express");

const router = Router();

const { getUsuarios, postUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuarioController");

router.get("/usuarios", getUsuarios);
router.post('/usuarios', postUsuario)
router.put('/usuarios/:IdUsuario', updateUsuario)
router.delete('/usuarios/:IdUsuario', deleteUsuario)

module.exports = router;
