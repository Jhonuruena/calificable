import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

class CitaController{

    private prisma: PrismaClient

    constructor(){
        this.prisma = new PrismaClient()
    }

    async crearCita(req:Request, res:Response){
        try{
            const  {
                idCita,
                fecha,
            } = req.body
        const cita = await this.prisma.cita.create(
            {
                data:{
                    idCita,
                    fecha,
                }
            }
        )
        res.json(cita)
        }catch(e:any){
            res.status(400)
            res.json({ error: e.message })
            
        }
    }

    async ListarCita(req:Request, res:Response){
        const citas = await this.prisma.cita.findMany()
        res.json(citas)
    }

}

export default CitaController