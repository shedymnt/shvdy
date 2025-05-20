const express = require('express')
const router = express.Router()
const Proudects = require('../controller/Products')
const db = require('../config/db');
const { Op } = require('sequelize');








router.get('/getall',Proudects.getAll)
router.get('/:category', Proudects.getByCategory)
router.post('/create', Proudects.create)
router.delete('/:id', Proudects.dell)
router.put('/put/:id', Proudects.update)


router.get('/search/:search', (req, res) => {
  const searchTerm = req.params.search;
  db.products.findAll({
    where: {
      name: { [Op.like]: `%${searchTerm}%` }
    }
  })
    .then(products => res.json(products))
    .catch(() => res.status(500).json({ error: "Search failed" }));
});

module.exports = router