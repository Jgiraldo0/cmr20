//carga las variables de entorno desde .env//
require('dotenv').config();

// importa las dependencias 
// framework para manejar el servidor 
const express = require('express');
//middleware para habilitar peticiones de otro dominio
const cors = require('cors');
// procesar datos JSON 
const bodyParser = require('body-parser');
// crear la aplicacion 
const app = express()
// si PORT no tiene valor usa el 3000
const port = process.env.PORT || 3000;
// habilita CORS 
app.use(cors());
// habilita bodyParser para leer los datos JSON
app.use(bodyParser.json());

//rutas de prueba 
app.get('/', (req, res) => {
    res.send('API RESTful con Express');
});

//ruta del cliente
const clientesRoutes = require ('./rutas/clientes');
app.use('/clientes', clientesRoutes)

// iniciar el servidor 
app.listen(port, () =>{
    console.log(`API CRM corriendo en http://localhost:${port}`)
})

