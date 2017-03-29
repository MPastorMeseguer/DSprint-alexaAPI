const express = require('express');
const router = express.Router();

const Item = require('../models/item');

/* API response with all items */
router.get('/', (req, res, next) => {
  Item.find({}, (err, itemsArr) => {
    if (err) {
      res.status(500).json({message: "Something went wrong"});
    } else {
      res.status(200).json(itemsArr);
    }
  });
});

/* API response with one item */
router.get('/:id', (req, res, next) => {
  let itemId = req.params.id;
  Item.findOne({_id: itemId}, (err, item) => {
    if (err) {
      res.status(500).json({message: "Something went wrong"});
    } else {
      res.status(200).json(item);
    }
  });
});

module.exports = router;
