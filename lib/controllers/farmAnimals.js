const { Router } = require('express');
const { Animal } = require('../models/FarmAnimal');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Animal.getAll();
      console.log(data);
      res.json(data);

    } catch (e) {
      next(e);
    }
  });
