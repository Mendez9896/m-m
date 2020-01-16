import { Request, Response } from 'express';
import Pregunta,{IPregunta} from '../models/pregunta.model';
import jwt from 'jsonwebtoken';

export async function buscarPreguntas(req:Request,res:Response){
    const preguntas = await Pregunta.find();
    return res.json(preguntas);
}
export async function busquedaEspecifica(req:Request,res:Response){
    let preguntas:string[]=Object.assign(req.body.clasificacion);
    console.log(preguntas);
    const result= await Pregunta.find({clasificacion:{$in:preguntas}});
    return res.json(result);
}
export async function insertarPregunta(req:Request,res:Response){
    let pregunta:IPregunta = Object.assign(req.body);
    let preguntaG: IPregunta = new Pregunta(pregunta);
    const savePregunta = await preguntaG.save();
    return res.json(savePregunta);
}

