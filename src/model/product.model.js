const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('fdu', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});



class Product extends Model {}

Product.init({
    id_product:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }
    , name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    , price: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    }
    }, {
        sequelize,
        modelName: 'Product',
})

module.exports = Product;
