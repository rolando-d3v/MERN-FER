const { Router } = require("express");

const router = Router();

const { getUsuarios, postUsuario } = require("../controllers/usuarioController");

router.get("/usuarios", getUsuarios);
router.post('/usuarios', postUsuario)

module.exports = router;
