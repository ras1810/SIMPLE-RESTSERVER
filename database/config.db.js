const mongoose = require('mongoose');

const DBconn = async () => {

    try {
        
        await mongoose.connect(process.env.MONGODBCNN_PROD);

        console.log("Base de datos en producción");

    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar la base de datos.');
    }
}

module.exports = {
    DBconn
}