import { Request, Response } from "express";
import usuario from "../models/usuario";

export const getusuarios = async (req:Request, res:Response) =>{

    const usuarios = await usuario.findAll();

    res.json({usuarios});
}

export const getusuario = async (req:Request, res:Response) =>{

    const {id} = req.params

    const unUsuario = await usuario.findByPk(id)

    if (unUsuario) {
        res.json(unUsuario) 
    }else{
        res.status(404).json({
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    
}

export const postUsuario = (req:Request, res:Response) =>{

    const {body} = req;

    res.json({
        msg: 'Post Usuario',
        body
    })
}

export const putUsuario = (req:Request, res:Response) =>{
    
    const {id} = req.params;
    const {body} = req;

    res.json({
        msg: 'Put Usuario',
        id,
        body
    })
}

export const deleteUsuario = (req:Request, res:Response) =>{
    
    const {id} = req.params;

    res.json({
        msg: 'Delete Usuario',
        id
    })
}