const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { productosGet, productosPost, productosPut, productosDelete  } = require('../controllers/productos.controllers');
const { validarCampos } = require('../middlewares/validar-campos');
const { existeIdProducto, estadoEliminado } = require('../helpers/db-validators');


// GET
router.get('/', productosGet);
// POST
router.post('/',[
    check('nombre', 'El nombre es obligatorio.').not().isEmpty(),
    check('precio', 'El precio es obligatorio.').not().isEmpty(),
    check('precio', 'El precio no puede ser mayor a un numero de 5 cifras').isLength({ max:5 }),
    validarCampos
], productosPost);
// PUT
router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeIdProducto ),
    check('id').custom( estadoEliminado ),
    validarCampos
],productosPut);
// DELETE
router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeIdProducto ),
    check('id').custom( estadoEliminado ),
    validarCampos
],productosDelete);

module.exports = router;