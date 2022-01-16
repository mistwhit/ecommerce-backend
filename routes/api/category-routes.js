const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Gets All Categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      subQuery: false,
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets One Category & Associated Products by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates New Category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates One Category by ID
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Deletes One Category by ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json('Category deleted successfully!');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
