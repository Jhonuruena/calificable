import { Router, Request, Response } from "express"
import FormularioController from "../controllers/FormularioController"

class FormularioRouter{

    router:Router
    miFormularioController:FormularioController

    constructor(){
        this.router=Router()
        this.miFormularioController = new FormularioController()
        this.routes()
    }

    private routes():void{
        this.router.get(
            '/formulario/:formulario',
            (req:Request, res:Response)=>{
                this.miFormularioController.obternerDefinicion(req,res)
            }
        )
    }

}

export default new FormularioRouter().router