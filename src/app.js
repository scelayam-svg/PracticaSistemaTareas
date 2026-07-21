//Importamos express
import express from "express";
import tareaRoutes from "./routes/tarea.routes.js"

//Importamos para trabajar con rutas de carpetas
import path from "path"

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

//Crear la aplicacion
const app = express();

//---------CONFIGURACIÓN DE EJS
app.set("view engine","ejs");

//Le decimos a Express donde están las vistas
app.set("views", path.join(__dirname,"views"));

//Permita usar archivos publicos estaticos
app.use(express.static(path.join(__dirname,"public")));

//---------MIDDLEWARES
app.use(express.urlencoded({extended:true}));

//--------RUTAS
app.use("/", tareaRoutes);

//Exportamos la aplicacion
export default app;
