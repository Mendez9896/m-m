import { Document, Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IRespuesta extends Document{
    titulo: string,
    descripcion: string,
    adjuntos: string[],
    puntaje: number,
    correcto: boolean
}

interface IPregunta extends Document{
    titulo: string,
    descripcion: string,
    adjuntos: string[],
    respuesta: IRespuesta[]
}

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

const respuestaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        min: 5,
        uppercase: true
    },
    descripcion: {
        type: String,
        required: true,
        min: 5
    },
    adjuntos: {
        type: [String],
        required: true
    },
    puntaje: {
        type: Number,
        required: true
    },
    correcto: {
        type: Boolean,
        required: true
    }
});

const preguntaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        min: 5,
        uppercase: true
    },
    descripcion: {
        type: String,
        required: true,
        min: 5
    },
    adjuntos: {
        type: [String],
        required: true
    },
    respuesta: {
        type: [respuestaSchema],
        required: true
    }
});

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

export default model<IUsuario>('Usuario', usuarioSchema);
