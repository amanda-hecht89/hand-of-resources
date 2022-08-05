const { Router } = require('express');
const { Monster } = require('../models/Monster');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Monster.getAll();
      res.json(data);

    } catch (e) {
      next(e);
    }
  });

