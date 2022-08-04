const { Router } = require('express');
const { Killer } = require('../models/Killer');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Killer.getAll();
      res.json(data);

    } catch (e) {
      next(e);
    }
  });
