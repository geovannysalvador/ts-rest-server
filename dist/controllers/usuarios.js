"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getusuario = exports.getusuarios = void 0;
const getusuarios = (req, res) => {
    res.json({
        msg: 'Get Usuarios'
    });
};
exports.getusuarios = getusuarios;
const getusuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Get Usuario',
        id
    });
};
exports.getusuario = getusuario;
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Post Usuario',
        body
    });
};
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Put Usuario',
        id,
        body
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Delete Usuario',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map