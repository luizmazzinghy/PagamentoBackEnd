// Cadastrar novos curso
import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
  date: Date,
  category: String,
  userId: Number,
  imageUrl: String,
});

const Workshop = mongoose.model("Workshop", workshopSchema);

export default Workshop;
