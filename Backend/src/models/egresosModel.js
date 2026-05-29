import { pool } from '../../db/db_config.js';

export const crearEgreso = async (datos) => {
    const { nombre, cantidad, fecha, id_usuario } = datos;
    const fechaFormateada = new Date(fecha).toISOString().split('T')[0];
console.log(fechaFormateada);
    const consultaSQL = {
        text: "INSERT INTO egresos (nombre, cantidad, fecha, id_usuario) VALUES ($1, $2, $3, $4) RETURNING nombre, cantidad, fecha",
        values: [nombre, cantidad, fechaFormateada, id_usuario]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows[0];
}

export const getEgresoById = async (id_egreso) => {
    const consultaSQL = {
        text: "SELECT * FROM egresos WHERE id = $1",
        values: [id_egreso]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows[0];
}

export const getEgresosByUserId = async (id_usuario) => {
    const consultaSQL = {
        text: "SELECT * FROM egresos WHERE id_usuario = $1",
        values: [id_usuario]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows;
}