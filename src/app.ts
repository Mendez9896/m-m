import express,{Application} from 'express';
import morgan from 'morgan';
import IndexRoutes from './routes/index.routes';

export class App{
    private app: Application;
    constructor(
        private port?: number | string
        ){
        this.app=express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings(){
        this.app.set('port',this.port || process.env.port || 3000);
    }
    routes(){
        this.app.use(IndexRoutes);
    }
    private middlewares(){
        this.app.use(morgan('dev'));
    }
    public async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Servidor inicializado');
    }
}