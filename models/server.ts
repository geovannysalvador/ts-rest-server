import express, {Application} from 'express';

// Aca colocamos las rutas de usuario pero UserRoutes puede ser cualquier nombre
import userRoutes from '../routes/usuario';
// Ejemplo si es que tengo mas
// import productsRoutes from '../routes/usuario'

class Server {
    // definir lo que vamos a usar 
    private app:Application;
    private port: string;
    // Definir los paths (link)
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        // Definir mis rutas
        this.routes()
    }

    routes(){
        // Cualquier ruta que necesito||pueden ser varias
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen (this.port, () =>{
            console.log('Corriendo en el puerto ' + this.port);
            
        })
    }
}

export default Server;