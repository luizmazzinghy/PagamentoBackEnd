import "dotenv/config";
import app from "./app";

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Backend iniciado na porta: ${port}`);
});
