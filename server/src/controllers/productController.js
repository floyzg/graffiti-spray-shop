import { products } from "../data/products.js";

export const getProducts = (req, res) => {
  console.log("======= controller hit =======\n", products);
  res.json(products);
};
