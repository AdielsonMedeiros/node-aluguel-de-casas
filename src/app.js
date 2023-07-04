import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';

class App{
    constructor(){
        this.server = express();
        mongoose.connect('mongodb+srv://medeirosadielson:Adielson123@devhouse.wytdj0r.mongodb.net/devhouse?retryWrites=true&w=majority', {
            useNewUrlParsergit: true,
            useUnifiedTopology: true,
        });
        this.middleware()
        this.routes();
    }
    middleware(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;