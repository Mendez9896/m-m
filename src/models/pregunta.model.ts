import { Document, Schema, model } from 'mongoose';
import respuestaSchema,{IRespuesta} from './respuesta.model'

export interface IPregunta extends Document{
    titulo: string,
    descripcion: string,
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
    adjuntos: {
        type: [String],
        required: true
    },
    respuesta: {
        type: [respuestaSchema],
        required: true
    }
});

export default model<IPregunta>('Pregunta', preguntaSchema);