import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routes from "../routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173", // Permita solicitações somente deste domínio
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Métodos HTTP permitidos
  })
);
app.use(bodyParser.json()); // Formata os dados recebidos do front e transforma em objeto

const url =
  "mongodb+srv://root:1234@cluster0.dlipebw.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(url);
    console.log("Connectado ao MongoDB");
  } catch (error) {
    console.error(error);
  }
}
connect();

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor Funcionando na porta ${PORT} `);
});
