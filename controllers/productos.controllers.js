const { response, request } = require('express');
const DBproductos = require('../models/DB.productos');

const db_productos = new DBproductos();

// Controller:GET
const productosGet = ( req = request, res = response) => {
    //const { pag="1", limit } = req.query // /api?q1=ejemplo+1&q2=ejemplo2
    const datos = db_productos.getDB();

    res.json({
        msg: "GET",
        datos
    });
}
// Controller:POST
const productosPost = ( req, res = response) => {

    const body = req.body;
    db_productos.setDB(body);

    res.status(201).json({
        msg: 'Se agrego un producto',
        body
    });
}
// Controller:PUT
const productosPut = ( req, res = response) => {

    const {id, nombre, precio} = req.query;
    
    db_productos.putDB(id,nombre, precio);

    res.json({
        method: "PUT",
        msg: "Se actualizo el producto"
    });
}
// Controller:DELETE
const productosDelete = ( req = request, res = response) => {

    const id = req.query.id;
    db_productos.deleteDB(id)

    res.json({
        method: "DELETE",
        msg: "Se elimino el producto con el id: " + id
    });
}

module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}