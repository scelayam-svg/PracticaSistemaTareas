//Logica

//Obtener Datos
import {
    obtenerTareas,
    agregarTarea
}
from "../services/tarea.service.js"

//Mostrar las tareas en la página principal
//-----------------------------------------------------------------
export async function mostrarTareas(req,res){
    try {
        const { estado } = req.query;
        const tareas = await obtenerTareas(estado);
        res.render("tareas",{ tareas, estadoActual: estado || "todas" });
    } catch (error) {
        res.send("Error al mostrar las tareas")
    }
}

//Mostrar el formulario de creación
//-----------------------------------------------
export function mostrarFormularioCrear(req,res){
    res.render("crear-tarea");
}

//Guardar tarea nueva
//------------------------------------------------
export async function guardarTarea(req,res){
    try {
        const { titulo, descripcion, estado } = req.body;
        await agregarTarea(titulo, descripcion, estado);
        res.redirect("/");
    } catch (error) {
        res.send("Error al guardar la tarea")
    }
}
