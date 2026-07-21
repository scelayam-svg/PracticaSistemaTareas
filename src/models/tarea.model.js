import mongoose from "mongoose";

//Modelo --- coleccion y estructura Schema
const tareaSchema = new mongoose.Schema(
    {
        titulo:{
            type:String,
            required:true,
            trim:true
        },
        descripcion:{
            type:String,
            required:true,
            trim:true
        },
        estado:{
            type:String,
            enum:["Pendiente","Completada"],
            default:"Pendiente"
        }
    },{
        timestamps:true
    }
)

//Creamos el modelo
const Tarea = mongoose.model("Tarea", tareaSchema);

export default Tarea;
