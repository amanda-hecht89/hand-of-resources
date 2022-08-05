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
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await Monster.getById(req.params.id);
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
      const data = await Monster.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Monster.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });

