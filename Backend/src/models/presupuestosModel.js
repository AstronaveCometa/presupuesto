import { pool } from '../../db/db_config.js';

export const crearPresupuesto = async (datos) => {
    const { nombre, cantidad } = datos;
    const consultaSQL = {
        text: "INSERT INTO presupuesto (nombre, cantidad) VALUES ($1, $2) RETURNING *",
        values: [nombre, cantidad]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows[0];
};

export const getPresupuestoByUserId = async (id_usuario) => {
    const consultaSQL = {
        text: "SELECT * FROM presupuesto p RIGHT JOIN usuarios u ON p.id_presupuesto = u.id_presupuesto WHERE u.id_usuario = $1",
        values: [id_usuario]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows;
};

export const updatePresupuesto = async (id_presupuesto, nombre, cantidad) => {
    const consultaSQL = {
        text: "UPDATE presupuesto SET nombre = $1, cantidad = $2 WHERE id_presupuesto = $3 RETURNING *",
        values: [nombre, cantidad, id_presupuesto]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows[0];
};

