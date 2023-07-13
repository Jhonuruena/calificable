import { Router, Request, Response } from "express";
import MedicoController from "../controllers/MedicoController";

class MedicoRouter {
  router: Router;
  medicoController: MedicoController;

  constructor() {
    this.router = Router();
    this.medicoController = new MedicoController();
    this.routes();
  }

  private routes(): void {
    this.router.post("/crear_medico", (req: Request, res: Response) => {
      this.medicoController.crearMedico(req, res);
    });

    this.router.get("/listar_medicos", (req: Request, res: Response) => {
      this.medicoController.ListarMedico(req, res);
    });


  }
}

export default new MedicoRouter().router;
