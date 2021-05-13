const { Router } = require('express');
const { usuariosGet } = require('../controllers/usuarios')
const { usuariosPut } = require('../controllers/usuarios')
const { usuariosPost } = require('../controllers/usuarios')
const { usuariosDelete } = require('../controllers/usuarios')

const router = Router();


router.get('/', usuariosGet);


router.put('/', usuariosPut);


router.post('/', usuariosPost);


router.delete('/', usuariosDelete);
/*
router.put('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'put papá'
    });
});

router.post('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'post papá'
    });
});

router.delete('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'delete papá'
    });
});*/

module.exports = router;