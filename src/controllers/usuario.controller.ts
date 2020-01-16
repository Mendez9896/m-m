import { Request, Response } from 'express';
import Usuario, { IUsuario } from '../models/usuario.model';
import jwt from 'jsonwebtoken';

export async function crearUsuario(req: Request, res: Response){
    let usuario: IUsuario = Object.assign(req.body);
    let usuarioG: IUsuario = new Usuario(usuario);
    usuarioG.password = await usuarioG.encryptPassword(usuario.password);
    const saveUsuario = await usuarioG.save();
    return res.json(saveUsuario);
}

export async function obtenerUsuarios(req: Request, res: Response){
    const usuarios = await Usuario.find().sort({edad: 1});
    return res.json(usuarios);
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
