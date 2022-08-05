const { Router } = require('express');
const { Order } = require('../models/Order');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Order.getAll();
      res.json(data);

    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await Order.getById(req.params.id);
      if(!data) {
        next();
      }
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await Order.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
