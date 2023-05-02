const productsControllers = require('./products.controllers')
const mailer = require('../utils/mailer')
//? Get, Post

const getAllProducts = (req, res) => {
    productsControllers.findAllProducts()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getProductById = (req, res) => {
    const id = req.params.id
    productsControllers.findProductById(id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}



const postProduct = (req, res) => {
    const {name, description, price} = req.body
    productsControllers.createProduct({name, description, price})
        .then((data) => {
        
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message, fields: {
                name: 'String',
                description: 'String',
                price: 'number'
              
            }})
        })
}

//? Solo admins pueden ejecutarlo
const patchProduct = (req, res) => {
    const id = req.params.id 
    const {name, description, price} = req.body

    productsControllers.updateProduct(id, {name, description, price})
        .then((data) =>{
            if(data){
                res.status(200).json({message: `Product edited succesfully with id: ${id}`})
            } else {
                res.status(404).json({message: `Product with id: ${id}, not found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}



//? Solo admins pueden ejecutarlo
const deleteProduct = (req, res) => {
    const id = req.params.id 
    productsControllers.removeProduct(id)
        .then((data) => {
            if(data){
                res.status(204).json()
            } else {
                res.status(200).json({message: `Product with id:${id}, Not Found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}




module.exports= {
    getAllProducts,
  
    getProductById,
    postProduct,
   
    patchProduct,
 
    deleteProduct
}
