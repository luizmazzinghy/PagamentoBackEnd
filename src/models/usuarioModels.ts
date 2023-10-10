import mongoose from "mongoose";
import bcrypt from "bcrypt";

const ususarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobreNome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  dateNacimento: {
    type: Date,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
    select: false,
  },
});

ususarioSchema.pre("save", async function (next) {
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

const Usuario = mongoose.model("Usuario", ususarioSchema);

export default Usuario;
