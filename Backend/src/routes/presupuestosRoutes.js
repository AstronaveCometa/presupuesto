import { Router } from "express";
import { crearPresupuestoController, getPresupuestoByUserIdController, updatePresupuestoController } from "../controllers/presupuestosController.js";
import { verificarToken } from "../middleware/verificarToken.js";

const router = Router();

router.post("/presupuestos", verificarToken, crearPresupuestoController);
router.get("/presupuestos/usuario/:id_usuario", verificarToken, getPresupuestoByUserIdController);
router.put("/presupuestos/:id_presupuesto", verificarToken, updatePresupuestoController);

export default router;