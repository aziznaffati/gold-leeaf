// 1-require express
const express = require('express')
// 2- require Router
const router = express.Router()
// 3- require model
const Product = require('../model/Product')
// 4- require controllers
const controllers = require('../controllers/product.controllers')
/**
 * @desc : add new product
 * @method : POST
 * @path : 'http://localhost:6000/api/products/'
 * @data : req.body
 */
router.post('/' , controllers.addProduct )
   /**
 * @desc : get all products
 * @method : GET
 * @path : 'http://localhost:6000/api/products/'
 * @data : no
 */
    router.get('/', controllers.getProducts)
      /**
 * @desc : delete one product
 * @method : DELETE
 * @path : 'http://localhost:6000/api/products/:id'
 * @data : req.params
 */
router.delete('/:id', controllers.deleteProduct)
 /**
 * @desc : get one product by id
 * @method : GET
 * @path : 'http://localhost:6000/api/products/:_id'
 * @data : req.params
 */
  router.get('/:_id', controllers.getProduct)
  /**
 * @desc : update one product by id
 * @method : PUT
 * @path : 'http://localhost:6000/api/products/:_id'
 * @data : req.params and req.body
 */
   router.put('/:_id', controllers.updateProduct)

    
module.exports= router