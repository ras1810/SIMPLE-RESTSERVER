const Producto = require('../models/producto.model');

const existeIdProducto = async( id = '' ) => {

    const existeId = await Producto.findById( id );

    if( !existeId )
        throw new Error('El id: '+ id +' no existe en la base de datos.');

}

const estadoEliminado = async( id = '' ) => {
    
    const estaEliminado = await Producto.findById( id );
    
    if( !estaEliminado.estado )
        throw new Error('Este producto no se encuentra en la base de datos o fue eliminado.');

}


module.exports = {
    existeIdProducto,
    estadoEliminado
}