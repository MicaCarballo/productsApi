const uuid = require('uuid')

const Products = require('../models/products.models')
const { hashPassword } = require('../utils/crypto')

const findAllProducts = async () => {
    const data = await Products.findAll({
        attributes: {
            exclude: [ 'createdAt', 'updatedAt']
        },
       
    })
    return data
}

const findProductById = async (id) => {
    const data = await Products.findOne({
        attributes: {
            exclude: [ 'createdAt', 'updatedAt']
        },
        where: {
            id: id
        }
    })
    return data
}



const createProduct = async (obj) => {
    const data = await Products.create({
        id: uuid.v4(),
        name: obj.name,
        description: obj.description,
        price: obj.price,
        
    })
    return data
}

const updateProduct = async (id, obj) => {
    const data = await Products.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}

const removeProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id: id
        }
    })
    return data[0]
}


module.exports = {
    findAllProducts,
    findProductById,
 
    createProduct,
    updateProduct,
    removeProduct
}
