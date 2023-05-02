const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Products = db.define('products' ,{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        
    }},
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len : [2, 50]
        }
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
       
    }
})

module.exports = Products