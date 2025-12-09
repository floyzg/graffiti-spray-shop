import { products } from "../data/products.js";

export const getProducts = (req, res) => {
  console.log("======= controller hit =======\n", products);
  res.json(products);
};

export const createProduct = (req, res) => {
  const {name, brand, color, price, image, accent} = req.body;

  if(!name || !brand || !color || !image || !price || !accent) {
    return res.status(400).json({ message: "Заполните данные корректно!."});
  }

  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name,
    brand,
    color,
    price: Number(price),
    image,
    accent
  };

  products.push(newProduct);

  console.log("======= controller hit (POST) =======\n", products);
  res.status(201).json(newProduct);
};

export const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  
  const index = products.findIndex(product => product.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: `Продукт с ID ${productId} не найден.` });
  }

  products.splice(index, 1);
  
  console.log("======= controller hit (DELETE) =======\n", products);
  res.status(200).json({ message: `Продукт с ID ${productId} удален.` });
};