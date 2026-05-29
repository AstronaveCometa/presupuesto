import { crearPresupuesto, getPresupuestoByUserId, updatePresupuesto } from '../models/presupuestosModel.js';
import { updateUserPresupuesto } from '../models/usersModel.js';

export const crearPresupuestoController = async (req, res) => {
    try {
        const presupuestoCreado = await crearPresupuesto(req.body);
        const id_usuario = req.user;
        await updateUserPresupuesto(id_usuario, presupuestoCreado.id_presupuesto);
        res.status(201).json(presupuestoCreado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPresupuestoByUserIdController = async (req, res) => {
    try {
        const presupuesto = await getPresupuestoByUserId(req.params.id_usuario);
        res.status(200).json(presupuesto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatePresupuestoController = async (req, res) => {
    try {
        const presupuestoActualizado = await updatePresupuesto(req.params.id_presupuesto, req.body.nombre, req.body.cantidad);
        res.status(200).json(presupuestoActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};