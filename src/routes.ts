import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

//mock

const url =
  "mongodb+srv://root:1234@cluster0.dlipebw.mongodb.net/?retryWrites=true&w=majority";

const workshopSchema = new mongoose.Schema({
  nome: String,
  cpf: Number,
  email: String,
  telefone: Number,
  senha: Number,
  repetirSenha: Number,
});

const Workshop = mongoose.model("Workshop", workshopSchema);

async function connect() {
  try {
    await mongoose.connect(url);
    console.log("Connectado ao MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.use(bodyParser.json()); // Formata os dados recebidos do front e transforma em objeto

app.post("/workshops", async (req: Request, res: Response) => {
  try {
    const requestBody = req.body;
    const newWorkshop = await new Workshop(requestBody);
    await newWorkshop.save(); // salvar no MongoDB
    console.log(requestBody.cpf, "request");
    console.log("Novo workshop adicionado", newWorkshop);
    res.status(201).json(newWorkshop);
  } catch (error) {
    console.error("Erro ao adicionar workshop", error);
    res.status(500).json({ error: "Erro ao adicionar workshops" });
  }
});

app.get("/workshops", async (_req: Request, res: Response) => {
  try {
    const workshops = await Workshop.find(); // consultar MongoDB
    res.status(200).json(workshops); // resposta da lista
  } catch (error) {
    console.error("Erro ao buscar workshops", error);
    res.status(500).json({ error: "Erro ao buscar workshops" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Funcionando na porta ${PORT} `);
});
