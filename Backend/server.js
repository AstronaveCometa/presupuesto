import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import ingresosRoutes from "./src/routes/ingresosRoutes.js";
import egresosRoutes from "./src/routes/egresosRoutes.js";
import presupuestosRoutes from "./src/routes/presupuestosRoutes.js";

dotenv.config();
const app = express();
const host = process.env.HOST;
app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(authRoutes);
app.use(ingresosRoutes);
app.use(egresosRoutes);
app.use(presupuestosRoutes);

app.listen(console.log(`Servidor corriendo en ${host}`));