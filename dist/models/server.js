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
const express_1 = __importDefault(require("express"));
// Aca colocamos las rutas de usuario pero UserRoutes puede ser cualquier nombre
const usuario_1 = __importDefault(require("../routes/usuario"));
const cors_1 = __importDefault(require("cors"));
const conection_1 = __importDefault(require("../db/conection"));
class Server {
    constructor() {
        // Definir los paths (link)
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Metodos iniciales
        this.dbconection();
        this.middlewares();
        // Definir mis rutas
        this.routes();
    }
    dbconection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conection_1.default.sync();
                yield conection_1.default.authenticate();
                console.log('La DB esta en linea');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        // cors
        this.app.use((0, cors_1.default)());
        // Lectura del body || parsear el body || peticiobnes post...
        this.app.use(express_1.default.json());
        // Carpeta publica
        this.app.use(express_1.default.static('public'));
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