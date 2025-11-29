const { response, request } = require('express');


// Controller:GET
const productosGet = ( req = request, res = response) => {
    const { pag="1", limit } = req.query // /api?q1=ejemplo+1&q2=ejemplo2
   
    res.json({
        method: "GET",
        pag,
        limit
    });
}
// Controller:POST
const productosPost = ( req, res = response) => {

    const body = req.body;

    res.status(201).json({
        msg: 'Se agrego un producto',
        body
    });
}
// Controller:PUT
const productosPut = ( req, res = response) => {

    const id = req.params.id;

    res.json({
        method: "PUT"
    });
}
// Controller:DELETE
const productosDelete = ( req, res = response) => {
    res.json({
        method: "DELETE",
        id
    });
}

module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}