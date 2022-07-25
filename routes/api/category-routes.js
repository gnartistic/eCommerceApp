const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.post('/', (req, res) => {
  // create a new category
})

router.get('/', async (req, res) => {
  // find all categories
  try {
    const data = await Category.findAll();
    if (!data) {
      res.status(404).json({ message: 'Category with this id does not exist!' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const data = await Category.findByPk(req.params.id, {
      include: { model: Product },
    });
    if (!data) {
      res.status(404).json({ message: 'Category with this id does not exist!' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
