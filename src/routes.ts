import { Router } from "express";
import { createWorkshop, workshop } from "./controllers/workshopControllers";
import { createNewUsuario, usuario } from "./controllers/usuarioControllers";

const router = Router();
//rota workshops
router.post("/workshops", createWorkshop); // rota de criacao de novo post
router.get("/workshops", workshop); // rota de buscar no banco

//rota usuarios
router.post("/usuarios", createNewUsuario); // rota de criacao de novo post
router.get("/usuarios", usuario); // rota de buscar no banco

export default router;
