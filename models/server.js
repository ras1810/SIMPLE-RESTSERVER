const express = require('express');
const cors = require('cors');

const rutas = require('../routes/productos.routes');


class Server{

    constructor(){
        // Atributos
        this.app = express();
        this.port = process.env.PORT;

        // Ejecutar
        this.middlewares();
        // Rutas
        this.routes();
    }

    // Middleware add+
    middlewares(){
    // Cors
        this.app.use(cors());
    // Serialización
        this.app.use(express.json());
    // Directorio public
        this.app.use(express.static('public'));
    }
    
    // Rutas add+
    routes() {
        // API productos
        this.app.use('/api', rutas);
        // API ubicación
    }

    
    // Inicializa el servidor
    startServer(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        });
    }
}

module.exports = Server;