const router = require('express').Router()

const productsServices = require('./products.services')
const passportJWT = require('../middlewares/auth.middleware')


router.route('/')
    .get(productsServices.getAllProducts)
    .post(productsServices.postProduct)



router.route('/:id')
    .get(productsServices.getProductById)
    .patch(productsServices.patchProduct)
   
    .delete(passportJWT.authenticate('jwt', {session: false}), productsServices.deleteProduct)

module.exports = router
