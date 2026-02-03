import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const puerto = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
app.use(cors());
app.use(express.json());


app.listen(puerto, console.log(`Servidor corriendo en http://${host}:${puerto}`));