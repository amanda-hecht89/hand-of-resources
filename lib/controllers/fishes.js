const { Router } = require('express');
const { Fish } = require('../models/Fish');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Fish.getAll();
      res.json(data);

    } catch (e) {
      next(e);
    }
  });
