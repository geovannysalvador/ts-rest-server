"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Aca colocamos las rutas de usuario pero UserRoutes puede ser cualquier nombre
const usuario_1 = __importDefault(require("../routes/usuario"));
// Ejemplo si es que tengo mas
// import productsRoutes from '../routes/usuario'
class Server {
    constructor() {
        // Definir los paths (link)
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Definir mis rutas
        this.routes();
    }
    routes() {
        // Cualquier ruta que necesito||pueden ser varias
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo en el puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map