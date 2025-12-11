const { productosGet, productosPost, productosPut, productosDelete  } = require('../controllers/productos.controllers');

const express = require('express');
const router = express.Router();

// GET
router.get('/', productosGet);

// POST
router.post('/', productosPost);
// PUT
router.put('/', productosPut);
// DELETE
router.delete('/', productosDelete);

module.exports = router;