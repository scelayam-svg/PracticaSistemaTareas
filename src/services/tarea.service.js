//Llamamos a la base de datos
import Tarea from "../models/tarea.model.js";

//Devuelva todas las tareas
export async function obtenerTareas(estado){
    if(estado){
        return await Tarea.find({estado}).sort({createdAt:-1});
    }
    return await Tarea.find().sort({createdAt:-1});
}

//Agregar una nueva tarea
export async function agregarTarea(titulo, descripcion, estado){
    const nuevaTarea = new Tarea({
        titulo,
        descripcion,
        estado
    });
    return await nuevaTarea.save();
}
