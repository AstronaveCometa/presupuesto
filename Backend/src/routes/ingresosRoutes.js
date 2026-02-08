import { Router } from "express";
import { crearIngresoController, obtenerIngresoPorIdController, obtenerIngresosPorIdUsuarioController } from "../controllers/ingresosController.js";
import { verificarToken } from "../middleware/verificarToken.js";

const router = Router();

router.post("/ingresos", verificarToken, crearIngresoController);
router.get("/ingresos/:id_ingreso", verificarToken, obtenerIngresoPorIdController);
router.get("/ingresos/usuario/:id_usuario", verificarToken, obtenerIngresosPorIdUsuarioController);

export default router;