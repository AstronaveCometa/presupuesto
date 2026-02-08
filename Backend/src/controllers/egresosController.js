import { getEgresoById, getEgresosByUserId, crearEgreso } from '../models/egresosModel.js';

export const crearEgresoController = async (req, res) => {
    try {
        const { nombre, cantidad, fecha } = req.body;
        const id_usuario = req.user;
        const nuevoEgreso = await crearEgreso({ nombre, cantidad, fecha, id_usuario });
        res.status(201).json(nuevoEgreso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const obtenerEgresoPorIdController = async (req, res) => {
    try {
        const id_egreso = req.params.id_egreso;
        const egreso = await getEgresoById(id_egreso);
        if (!egreso) {
            return res.status(404).json({ message: "Egreso no encontrado." });
        }
        res.status(200).json(egreso);
    } catch (error) {
        res.status(500).json({ error: "Error interno." });
    }
}

export const obtenerEgresosPorIdUsuarioController = async (req, res) => {
    try {
        const id_usuario = req.user; 
        const egresos = await getEgresosByUserId(id_usuario);
        res.status(200).json(egresos);
    } catch (error) {
        res.status(500).json({ error: "Error interno." });
    }
}