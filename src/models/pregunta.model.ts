import { Document, Schema, model } from "mongoose";

export interface IPregunta extends Document {
  titulo: string;
  id_usuario: string;
  descripcion: string;
  clasificacion: string[];
  adjuntos: string[];
}
export const preguntaSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    min: 5,
    uppercase: true
  },
  id_usuario: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true,
    min: 5
  },
  clasificacion: {
    type: [String],
    required: true
  },
  adjuntos: {
    type: [String],
    required: true
  }
});

export default model<IPregunta>("Pregunta", preguntaSchema);
