const express = require('express');

const app = express();

const PORT = 8080;

app.get('/info', (req, res) => {
  var fs = require("fs");
  var contents = fs.readFileSync("package.json");
  var jsonContent = JSON.parse(contents);

  var data = res.json({ serverName: jsonContent.name, serverVersion: jsonContent.version});

  res.send(data);
});

app.get('/products/all', (req, res) => {
  var fs = require("fs");
  var products = fs.readFileSync("src/data/products.json");
  var jsonProducts = JSON.parse(products);

  res.send(jsonProducts);
});

app.get('/product/:id', (req, res) => {
  var fs = require("fs");
  var data = fs.readFileSync("src/data/products.json");

  const productId = req.params.id;
  const product = data.find(_product => _product.id === productId);

  if (product) {
     res.json(product);
  } else {
     res.json({ message: `Product ${productId} doesn't exist`})
  }
});

app.get('/category/:ctyId', (req, res) => {
  var fs = require("fs");
  var data = fs.readFileSync("src/data/categories.json");

  const categoryId = req.params.id;
  const category = data.find(_category => _category.id === categoryId);

  if (category) {
     res.json(category);
  } else {
     res.json({ message: `Category ${categoryId} doesn't exist`})
  }
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});