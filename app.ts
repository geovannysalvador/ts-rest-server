import dotenv from 'dotenv'
import Server from './models/server';

// Condigurar dotenv
dotenv.config();

const server = new Server();

server.listen();