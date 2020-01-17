import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Respuesta, { IRespuesta } from '../models/respuesta.model';

export async function insertarRespuesta(req:Request,res:Response){
    let respuesta:IRespuesta = Object.assign(req.body);
    let respuestaG: IRespuesta = new Respuesta(respuesta);
    const saveRespuesta = await respuestaG.save();
    return res.json(saveRespuesta);
}

export async function buscarRespuestas(req:Request,res:Response){
    let pregunta:string =Object.assign(req.body.id_pregunta);
    const result= await Respuesta.find({id_pregunta: pregunta });
    return res.json(result);
}

export async function updateRespuesta(req:Request,res:Response){
    Respuesta.findByIdAndUpdate({ _id : req.body._id},req.body).then( () => {
        res.json("Actualziacion Correcta")
    }).catch(err => {
        res.status(400).json(err);
    })
}

export async function deleteRespuesta(req:Request,res:Response){
    Respuesta.findOneAndDelete({_id: req.body._id}).then(() => {
        res.json("Respuesta Eliminada");
      }).catch(err => {
        res.status(400).json(err);
      })
}