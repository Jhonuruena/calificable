import { Request, Response, Router } from "express";
import PacienteController from "../controllers/PacienteController";

class PacienteRouter{

     router: Router
     paciente: PacienteController

    constructor(){
        this.router = Router()
        this.paciente = new PacienteController()
        this.routes()
    }

    private routes():void{
        this.router.get('/listar_pacientes', (req:Request, res:Response)=>{
            this.paciente.listarPaciente(req,res)
        })

        this.router.post('/crear_paciente', (req:Request, res:Response)=>{
            this.paciente.crearPaciente(req,res)
        })
    }

}


export default new PacienteRouter().router