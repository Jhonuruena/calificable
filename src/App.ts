import express , { Application, Request, Response } from "express";
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./swagger.config"; 

import MedicoRouter from "./routes/Medico.routes";
import PacienteRouter from "./routes/Paciente.routes"
import FormularioRouter from "./routes/Formulario.routes";
import CitaRouter from "./routes/Cita.routes";



class App{

    //Declaracion de atributos
    public app: Application
    private server: any

    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(
            '/api-docs',
            swaggerUi.serve,
            swaggerUi.setup(swaggerSpec)
        )
        this.routes()

    }

    //Metodo para inicializar servidor
    public start():void{
        this.server = this.app.listen(3000,()=>{
            console.log("El servidor esta escuchando en el puerto 3000")
        })
    }

    //Metodo para cerrar servidor
    public close():void{
        this.server.close()
    }

    private routes():void{
        this.app.use('/', MedicoRouter)
        this.app.use('/', PacienteRouter)
        this.app.use('/', FormularioRouter)
        this.app.use('/', CitaRouter)
    }

}

//Exportar la clase app
export default App