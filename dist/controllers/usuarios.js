"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getusuario = exports.getusuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getusuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
});
exports.getusuarios = getusuarios;
const getusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario con el id: ${id}`
        });
    }
});
exports.getusuario = getusuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: `Ya existe el correo: ${body.email}`
            });
        }
        const usuario = new usuario_1.default(body);
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte a soporte tecnico'
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const existeUser = yield usuario_1.default.findByPk(id);
        if (!existeUser) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id' + id
            });
        }
        yield existeUser.update(body);
        res.json(existeUser);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte a soporte tecnico'
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const existeUser = yield usuario_1.default.findByPk(id);
    if (!existeUser) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id' + id
        });
    }
    // Eliminarlo permanentemente de la bd
    // await existeUser.destroy();
    // Cambiarle el estado a cero como en la BD se indico
    yield existeUser.update({ estado: false });
    res.json(existeUser);
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map