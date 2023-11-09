import express, {Application} from 'express'

class Server {
    // definir lo que vamos a usar 
    private app:Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000'
    }

    listen(){
        this.app.listen (this.port, () =>{
            console.log('Corriendo en el puerto ' + this.port);
            
        })
    }
}

export default Server;