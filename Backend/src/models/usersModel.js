import bcrypt from "bcryptjs";
import { pool } from '../../db/db_config.js';

export const createUser = async (datos) => {
    const { nombre, email, password } = datos;
    const hashedPassword = await bcrypt.hash(password, 10);
    const consultaSQL = {
        text: "INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3) RETURNING nombre, email",
        values: [nombre, email, hashedPassword]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows[0];
}

export const getUserByEmail = async (email) => {
    const consultaSQL = {
        text: "SELECT * FROM usuarios WHERE email = $1",
        values: [email]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows[0];
}

export const getUserById = async (id_usuario) => {
    const consultaSQL = {
        text: "SELECT * FROM usuarios WHERE id_usuario = $1",
        values: [id_usuario]
    };
    const resultado = await pool.query(consultaSQL);
    return resultado.rows[0];
}