const router = require('express').Router();
const { faker } = require('@faker-js/faker');
const Products = require('../model/product.model');

router.get('/products', async (req, res) => {
    const products = await Products.findAll();
    res.json(products);
});

router.get('/products/:id', async (req, res) => {
    const products = await Products.findOne({
        where: {
            id_product: req.params.id
        }
    });
    res.json(products);
});

router.post('/products', async (req, res) => {
    const dataProducts = req.body;
    await Products.sync();
    await Products.create({
        name: dataProducts.name,
        price: dataProducts.price,
  });
  res.send('Product created');
});

router.put('/products/:id_product', async (req, res) => {
    const id = req.params.id_product;
    const dataProducts = req.body;
    await Products.update({
        name: dataProducts.name,
        price: dataProducts.price,
    }, {
        where: {
            id_product: id
        }
    });
    res.send('Product updated');
}); 

module.exports = router; 