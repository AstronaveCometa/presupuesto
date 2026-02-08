import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const env_host = process.env.DB_HOST;
const env_user = process.env.USER;
const env_password = process.env.DB_PASSWORD;
const env_database = process.env.DB_NAME;

const pool = new pg.Pool({
    host: env_host,
    user: env_user,
    password: env_password,
    database: env_database,
    allowExitOnIdle: true
});

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