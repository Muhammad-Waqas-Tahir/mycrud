var express = require('express');
var router = express.Router();
var product=require("../Model/productModel")

/* GET home page. */
router.get('/',async function(req, res, next) {
    let products=await product.find();
    console.log(products);
  res.render('product/list',{title:"Products",products});
});
router.get('/add',async function(req, res, next) {
  res.render('product/add');
});
router.post('/add',async function(req, res, next) {
  let products = new product(req.body);
  await products.save();
  res.redirect("/product");
  });

  router.get('/delete/:id',async function(req, res, next) {
    let products= await product.findByIdAndDelete(req.params.id);
     res.redirect('/product');
  });
  router.get('/edit/:id',async function(req, res, next) {
    let products= await product.findById(req.params.id);
     res.render('product/edit',{products});
  });
  router.post('/edit/:id',async function(req, res, next) {
    let products= await product.findById(req.params.id);
    products.Name=req.body.Name;
    products.Price=req.body.Price;
    products.Category=req.body.Category;
    products.Brand=req.body.Brand;
    await products.save();
     res.redirect("/product");
  });

module.exports = router;
