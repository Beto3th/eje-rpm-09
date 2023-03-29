const express = require("express");
const app = express(); //Responder solicitudes de clientes
const port = process.env.port || 3000; //Para cuando realizemos en Deploy (despliegue)

//Para obtener un recurso del servidor http://localhost:3000
app.get("/",(req,res)=>{
    res.send("Hoa. Este es un servidor en Node.js con express");
})

//Declaraciones
//Para obtener un recurso del servidor http://localhost:3000/productos
app.get("/productos",(req,res)=>{
    res.send("Esta serie ela pagina de productos");
})

app.get("*", (req,res)=>{
    res.send("404 | Pagina no encontrada");
})

//Proceso
app.listen(port,()=>{
    console.log("servidor en Node.js con express escuchando en el puerto, port");
})
/*app.post = Crear un resurso
app.put = Actualizar un recurso
app.delete = Eliminar un recurso*/