// workshopController.ts
import { Request, Response } from "express";
import Usuario from "../models/usuarioModels"; // importar o models aqui

//Post criar um novo workshop
export const createNewUsuario = async (req: Request, res: Response) => {
  try {
    const requestBody = req.body;
    const newUsuario = new Usuario(requestBody);
    await newUsuario.save(); // Salvar no MongoDB
    console.log("Novo usuario adicionado", newUsuario);
    res.status(201).json(newUsuario);
  } catch (error) {
    console.error("Erro ao adicionar usuario", error);
    res.status(500).json({ error: "Erro ao adicionar usuario" });
  }
};

//Get consulta o banco
export const usuario = async (_req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.find(); // consultar MongoDB
    res.status(200).json(usuarios); // resposta da lista
  } catch (error) {
    console.error("Erro ao buscar usuario", error);
    res.status(500).json({ error: "Erro ao buscar usuario" });
  }
};
