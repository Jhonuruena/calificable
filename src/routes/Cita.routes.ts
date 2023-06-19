import { Router, Request, Response } from "express";
import CitaController from "../controllers/CitaControllers";

class CitaRouter {
  router: Router;
  citaController: CitaController; 

  constructor() {
    this.router = Router();
    this.citaController = new CitaController()
    this.routes();
  }

  private routes(): void {
    this.router.get("/a", (req: Request, res: Response) => {
      res.send("hola prueba")
    });

    this.router.get("/listar_citas",(req:Request, res:Response)=>{
      this.citaController.ListarCita(req,res);
  })

  this.router.post("/crear_cita",(req:Request, res:Response)=>{
    this.citaController.crearCita(req,res)
})

  }
}

export default new CitaRouter().router;