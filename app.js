// Requires 
var express = require('express');
var mongoose = require('mongoose');


// inicializar variables

var app = express();

// conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/hospitalDB', (err, res)=>{
    if (err) throw err;
    console.log('Conexión a la Base de Datos : \x1b[32m%s\x1b[0m',' online');
});


// Rutas

app.get('/', (req, res, next) =>
{
    res.status(200).json({
        ok: true,
        mensaje: 'petición realizada correctamente'
    })
}
)

// Escuchar peticiones

app.listen(3000, ()=>{
    // color verde en la consola  \x1b[32m%s\x1b[0m
    console.log('Express Serve corriendo puerto 3000 : \x1b[32m%s\x1b[0m',' online');
});
