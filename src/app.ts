import express, {Application} from 'express';
import morgan from 'morgan';
import IndexRoutes from './routes/index.routes';
import UsuarioRoutes from './routes/usuario.routes';

export class App{
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.setttings();
        this.middlewares();
        this.routes();
    }

    private setttings(){
        this.app.set('port', this.port || process.env.port || 3000)
    }

    private routes(){
        this.app.use(IndexRoutes);
        this.app.use('/usuarios', UsuarioRoutes);
    }

    private middlewares() {
        //funciones que se ejecutan antes de llamar a funcion rest
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    public async listen(){
        await this.app.listen(this.app.get('port'));
        console.log(`Servidor corriendo en el puerto ${this.app.get('port')}`)
    }
}
