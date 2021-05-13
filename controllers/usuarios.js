const { response } = require('express');


const usuariosGet = (req, res) => {
    res.json({
        ok: true,
        msg: 'GET API - Controller'
    });
}

const usuariosPut = (req, res) => {
    res.json({
        ok: true,
        msg: 'PUT API - Controller'
    });
}

const usuariosPost = (req, res) => {

    const body = req.body;

    res.json({
        ok: true,
        msg: 'POST API - Controller',
        body: body,
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'DELETE API - Controller'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}