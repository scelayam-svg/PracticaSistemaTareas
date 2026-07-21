//RUTAS

//Importar Express
import express from "express";

//Importamos los controladores
import {
    mostrarTareas,
    mostrarFormularioCrear,
    guardarTarea
}
from "../controllers/tarea.controller.js";

//Creamos el router
const router = express.Router();

//-------------------------------
//RUTA GET
router.get("/", mostrarTareas);
router.get("/tareas/nuevo", mostrarFormularioCrear);
router.post("/tareas", guardarTarea);

//Exportamos las rutas
export default router;
