import { Document, Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import preguntaSchema,{IPregunta} from './pregunta.model'


export interface IUsuario extends Document {
    codigo: number;
    nombre: string,
    password: string,
    puntaje: number,
    contacto: string
    preguntas: IPregunta[]
    encryptPassword(pass: string): Promise<string>;
    validatePassword(pass: string): Promise<boolean>;
}
const usuarioSchema = new Schema({
    codigo: {
        type: Number,
        required: true,
        unique: true,
        min: 3
    },
    nombre: {
        type: String,
        required: true,
        min: 5
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    puntaje: {
        type: Number,
        required: true
    },
    contacto: {
        type: String,
        required: true,
        min: 5
    },
    preguntas: {
        type: [preguntaSchema],
        required: true
    }
});

usuarioSchema.methods.encryptPassword = async (pass: string):Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
};

usuarioSchema.methods.validatePassword = async function (pass: string):Promise<boolean>  {
    return await bcrypt.compare(pass, this.pass);
};

export default  model<IUsuario>('Usuario', usuarioSchema);

