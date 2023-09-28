import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const formulario = [
  {
    nome: "Luiz",
    idade: "37",
    cartao: "4111111111111111",
    cvc: "123",
    validade: "01/30",
  },
];

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

app.get("/rotaGet", (_req, res) => {
  res.status(200).send(formulario);
});

app.post("/rotaPost", (req, res) => {
  formulario.push(req.body);
  res.status(201).send("Nome cadastrado com sucesso");
});
