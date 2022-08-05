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
  });
