
import express from 'express';
import { Products, Stock } from './products';

export const routes = express.Router();

routes.get('/products', async (req, res) => {
  return res.status(201).send(Products);
})

routes.get('/product', async (req, res) => {

  const product = Products.products.filter((p) => {return  p.id == Number(req.query.ID)})

  console.log(product);
  return res.status(201).send(product);
});
routes.get('/stock', async (req, res) => {

  const stocks = Stock.stock.filter((p) => {return  p.id == Number(req.query.ID)})

  console.log(stocks);
  return res.status(201).send(stocks);
});