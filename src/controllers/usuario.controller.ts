import { Request, Response } from 'express';
import Usuario, { IUsuario } from '../models/usuario.model';
import jwt from 'jsonwebtoken';

export async function createUsuario(req: Request, res: Response){
    let usuario: IUsuario = Object.assign(req.body);
    let usuarioG: IUsuario = new Usuario(usuario);
    usuarioG.password = await usuarioG.encryptPassword(usuario.password);
    const saveUsuario = await usuarioG.save();
    return res.json(saveUsuario);
}
export async function getUsuarios(req: Request, res: Response){
    const usuarios = await Usuario.find();
    return res.json(usuarios);
}
export async function getUsuario(req: Request, res: Response){
  Usuario.find({_id: req.params.id}).exec()
  .then(datos=>{
    res.json(datos);
  }).catch(err => {
  res.json(err);
  })
}
export async function updateUsuario(req: Request, res: Response){
  Usuario.findByIdAndUpdate({ _id : req.params.id},req.body).then( () => {
        res.json("Actualziacion de Usuario realizada")
    }).catch(err => {
        res.status(400).json(err);
    })
}
export async function deleteUsuario(req: Request, res: Response){
  Usuario.findOneAndDelete({_id: req.params.id})
  .then(()=>{
    res.json("Usuario Eliminado")
  })
  .catch((err)=>{
      res.json(400).json(err);
  })
}

export async function login(req: Request, res: Response) {
    let user: IUsuario = Object.assign(req.body);
    const usuarioEncontrado = await Usuario.findOne({codigo: user.codigo});
    if(!usuarioEncontrado) return res.status(404).json("Credenciales incorrectos");
    const correctPass: boolean = await usuarioEncontrado.validatePassword(user.password);
    if(!correctPass) return res.status(404).json("Credenciales incorrectos");

    let token: string = jwt.sign(
        {
            id: usuarioEncontrado._id
        }, "TEST", {expiresIn: 60 * 60 * 24}
    );
    return res.header('token', token).json(usuarioEncontrado);
}

export function listUsuarios(req: Request, res: Response){
    Usuario.find().exec()
        .then(datos => {
            res.json(datos);
        }).catch(err => {
        res.json(err);
    });
}
