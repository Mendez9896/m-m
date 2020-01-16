import { Document, Schema, model } from 'mongoose';
import {respuestaSchema, IRespuesta} from './respuesta.model'

export interface IPregunta extends Document{
    titulo: string,
    descripcion: string,
    calificacion: string,
    adjuntos: string[],
    respuesta: IRespuesta[]
}
export const preguntaSchema = new Schema({
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
    calificacion:{
        type:String,
        required:true
    },
    adjuntos: {
        type: [String],
        required: true
    },
    respuestas: {
        type: [respuestaSchema],
        required: true
    }
});

export default model<IPregunta>('Pregunta', preguntaSchema);