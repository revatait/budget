var express = require('express');
var router = express.Router();

var categoryControllers = require('../controllers/categories');

router.get('/categories', categoryControllers.getCategories);
router.get('/categories/:id', categoryControllers.getCategory);
router.post('/categories', categoryControllers.addCategory);
router.put('/categories', categoryControllers.updateCategory);
router.delete('/categories', categoryControllers.deleteCategory);

module.exports = router;
