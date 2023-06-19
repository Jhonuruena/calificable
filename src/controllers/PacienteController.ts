import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

class PacienteController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async crearPaciente(req: Request, res: Response) {
    try {
      const { cedula, nombre, apellido, telefono, fecha } = req.body;
      const fechaNacimiento = new Date(fecha);
      const paciente = await this.prisma.paciente.create({
        data: {
          cedula,
          nombre,
          apellido,
          fechaNacimiento,
          telefono,
        },
      });
      res.json(paciente);
    } catch (e:any){
        res.status(400)
        res.json({ error: e.message });
    }
  }

  async listarPaciente(req:Request, res:Response){
    const pacientes = this.prisma.paciente.findMany()
    res.json(pacientes)
  }
}

export default PacienteController
