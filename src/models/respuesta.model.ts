import { Document, Schema, model } from 'mongoose';
export interface IRespuesta extends Document{
    titulo: string,
    id_pregunta: string,
    descripcion: string,
    adjuntos: string[],
    puntaje: number,
    correcto: boolean
}
export const respuestaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        min: 5,
        uppercase: true
    },
    id_pregunta: {
        type: String,
        required: true
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

export default model<IRespuesta>('Respuesta', respuestaSchema);
