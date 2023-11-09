import { Request, Response } from "express";
import Usuario from '../models/usuario';

export const getusuarios = async (req:Request, res:Response) =>{

    const usuarios = await Usuario.findAll();

    res.json({usuarios});
}

export const getusuario = async (req:Request, res:Response) =>{

    const {id} = req.params

    const usuario = await Usuario.findByPk(id)

    if (usuario) {
        res.json(usuario) 
    }else{
        res.status(404).json({
            msg: `No existe el usuario con el id: ${id}`
        })
    }

}

export const postUsuario = async (req:Request, res:Response) =>{

    const {body} = req;

    try {

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if(existeEmail){
            return res.status(400).json({
                msg: `Ya existe el correo: ${body.email}`
            })
        }

        const usuario = new Usuario(body)
        await usuario.save();

        res.json(usuario);
         
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte a soporte tecnico'
        })
    }
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