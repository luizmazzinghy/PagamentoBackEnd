// workshopController.ts
import { Request, Response } from "express";
import Workshop from "../models/workshopModels"; // importar o models aqui

//Post criar um novo workshop
export const createWorkshop = async (req: Request, res: Response) => {
  try {
    const requestBody = req.body;
    const newWorkshop = new Workshop(requestBody);
    await newWorkshop.save(); // Salvar no MongoDB
    console.log("Novo workshop adicionado", newWorkshop);
    res.status(201).json(newWorkshop);
  } catch (error) {
    console.error("Erro ao adicionar workshop", error);
    res.status(500).json({ error: "Erro ao adicionar workshops" });
  }
};

//Get consulta o banco
export const workshop = async (_req: Request, res: Response) => {
  try {
    const workshops = await Workshop.find(); // consultar MongoDB
    res.status(200).json(workshops); // resposta da lista
  } catch (error) {
    console.error("Erro ao buscar workshops", error);
    res.status(500).json({ error: "Erro ao buscar workshops" });
  }
};
