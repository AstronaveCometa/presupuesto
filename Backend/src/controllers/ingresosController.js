import { getIngresoById, getIngresosByUserId, crearIngreso } from '../models/ingresosModel.js';

export const crearIngresoController = async (req, res) => {
    try {
        const { nombre, cantidad, fecha } = req.body;
        const id_usuario = req.user;
        const nuevoIngreso = await crearIngreso({ nombre, cantidad, fecha, id_usuario });
        res.status(201).json(nuevoIngreso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const obtenerIngresoPorIdController = async (req, res) => {
    try {
        const id_ingreso = req.params.id_ingreso;
        const ingreso = await getIngresoById(id_ingreso);
        if (!ingreso) {
            return res.status(404).json({ message: "Ingreso no encontrado." });
        }
        res.status(200).json(ingreso);
    } catch (error) {
        res.status(500).json({ error: "Error interno." });
    }
}

export const obtenerIngresosPorIdUsuarioController = async (req, res) => {
    try {
        const id_usuario = req.user; 
        const ingresos = await getIngresosByUserId(id_usuario);
        res.status(200).json(ingresos);
    } catch (error) {
        res.status(500).json({ error: "Error interno." });
    }
}