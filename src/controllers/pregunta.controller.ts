import { Request, Response } from 'express';
import Pregunta,{IPregunta} from '../models/pregunta.model';

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


export async function getInfoPregunta(req:Request,res:Response){
    let pregunta:string =Object.assign(req.body._id);
    const result= await Pregunta.find({_id: pregunta });
    return res.json(result);
}

export async function updatePregunta(req:Request,res:Response){
    Pregunta.findByIdAndUpdate({ _id : req.body._id},req.body).then( () => {
        res.json("ActualiZacion Correcta")
    }).catch(err => {
        res.status(400).json(err);
    })
}

export async function deletePregunta(req:Request,res:Response){
    Pregunta.findOneAndDelete({_id: req.body._id}).then(() => {
        res.json("Pregunta Eliminada");
      }).catch(err => {
        res.status(400).json(err);
      })
}

export async function filtrarPregunta(req:Request,res:Response){
    const text = req.body.text;
    const preguntas = await Pregunta.find({
        $or: [
            {titulo: {
                    $regex: text, '$options': 'i'
                }},
            {descripcion: {
                    $regex: text, '$options': 'i'
                }}
        ]
    });
    return res.json(preguntas);
}
