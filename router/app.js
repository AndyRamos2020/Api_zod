const express = require('express');
const router = express.Router();
const { getUsuario, postUsuario, putUsuario, deleteUsuario } = require('../controller/index.js');

router.get('/', getUsuario);

router.post('/save', postUsuario);

router.put('/put/:id', putUsuario);

router.delete('/delete/:id', deleteUsuario);

module.exports = router;