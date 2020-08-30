const { Router } = require("express");

const router = Router();

const { getUsuarios, postUsuario, updateUsuario } = require("../controllers/usuarioController");

router.get("/usuarios", getUsuarios);
router.post('/usuarios', postUsuario)
router.put('/usuarios/:IdUsuario', updateUsuario)

module.exports = router;
