import { Router } from "express";
import { crearEgresoController, obtenerEgresoPorIdController, obtenerEgresosPorIdUsuarioController } from "../controllers/egresosController.js";
import { verificarToken } from "../middleware/verificarToken.js";

const router = Router();

router.post("/egresos", verificarToken, crearEgresoController);
router.get("/egresos/:id_egreso", verificarToken, obtenerEgresoPorIdController);
router.get("/egresos/usuario/:id_usuario", verificarToken, obtenerEgresosPorIdUsuarioController);

export default router;