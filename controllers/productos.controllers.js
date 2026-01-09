const { response, request } = require('express');
const Producto = require('../models/producto.model');

// Controller:GET
const productosGet = async( req = request, res = response) => {

    // contar cuantos registros tenemos
    const totalDeRegistros = await Producto.countDocuments({ estado: true });
    // validar que sea un numero y no un texto
    const { limite } =req.query;
    const limiteMax = Number(limite) <= totalDeRegistros ? limite : totalDeRegistros;
    // solo muestra el registro en true no los elimina de la DB - solo  muestra "nombre" "precio" "_id"
    const productos = await Producto.find({ estado: true }).select("nombre precio _id")
        .limit(limiteMax) // paginando usuarios
        //.skip(desde)

    res.json({
        msg: "GET",
        limit_max: limiteMax,
        total_de_registros: totalDeRegistros,
        productos
    });
}


// Controller:POST
const productosPost = async ( req, res = response) => {
    //{nombre, ..resto}    
    const { nombre, precio } = req.body;
    const productos = new Producto({nombre, precio});

    // verificar nombre
    const nombreExist = await Producto.findOne({ nombre });
    if (nombreExist){
        return res.status(400).json({
            msg: 'El nombre del producto ya esta registrado'
        })
    }
    await productos.save();

    res.status(201).json({
        msg: 'Se agrego un producto',
    });
}

// Controller:PUT
const productosPut = async ( req, res = response) => {

    const { id } = req.params;
    // _id y nombre no seran modificados
    const { _id, nombre, ...resto } = req.body

    const producto = await Producto.findByIdAndUpdate(id, resto);

    res.json({
        method: "PUT",
    });
}
// Controller:DELETE
const productosDelete = async ( req = request, res = response) => {

    const { id } = req.params;
    const producto = await Producto.findByIdAndUpdate(id, { estado: false });

    res.json({
        method: "El producto fue eliminado: ",
        producto
    });
}

module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}