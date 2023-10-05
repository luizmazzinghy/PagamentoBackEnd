import mongoose from "mongoose";

const ususarioSchema = new mongoose.Schema({
  nome: String,
  sobreNome: String,
  email: String,
  dateNacimento: Date,
  endereco: String,
  senha: String,
  repetirSenha: String,
});

const Usuario = mongoose.model("Usuario", ususarioSchema);

export default Usuario;
