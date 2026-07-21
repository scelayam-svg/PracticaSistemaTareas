import app from "./app.js";

//Importamos la configuraci�n de sistema
import {config} from "./config/env.js";

//Importamos la conexion a la base de datos
import { conectarDB } from "./config/database.js";

await conectarDB();

//Iniciamos el servidor
app.listen(config.port,()=>{
    console.log(`Servidor ejecutandose en http://localhost:${config.port}`);
});
