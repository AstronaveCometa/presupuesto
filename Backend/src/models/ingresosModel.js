import { pool } from '../../db/db_config.js';

export const crearIngreso = async (datos) => {
    const { nombre, cantidad, fecha, id_usuario } = datos;
    const fechaFormateada = new Date(fecha).toISOString().split('T')[0];
console.log(fechaFormateada); // Ejemplo: "2023-10-25";
    const consultaSQL = {
        text: "INSERT INTO ingresos (nombre, cantidad, fecha, id_usuario) VALUES ($1, $2, $3, $4) RETURNING nombre, cantidad, fecha",
        values: [nombre, cantidad, fechaFormateada, id_usuario]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows[0];
}

export const getIngresoById = async (id_ingreso) => { //Cambiar a obtenerIngresoPorId
    const consultaSQL = {
        text: "SELECT * FROM ingresos WHERE id = $1",
        values: [id_ingreso]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows[0];
}

export const getIngresosByUserId = async (id_usuario) => { //Cambiar a obtenerIngresosPorIdUsuario
    const consultaSQL = {
        text: "SELECT * FROM ingresos WHERE id_usuario = $1",
        values: [id_usuario]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows;
}