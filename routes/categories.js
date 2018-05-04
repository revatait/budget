var express = require('express');
var router = express.Router();
var knex = require('knex');

var categoryControllers = require('../controllers/categories');

/* GET categories page. */
// router.get('/categories', function (req, res, next) {
//   res.render('categories', {title: 'Categories' });
// });

router.get('/categories', categoryControllers.getCategories);
router.get('/categories/:id', categoryControllers.getCategory);
router.post('/categories', categoryControllers.addCategory);
router.put('/categories', categoryControllers.updateCategory);
router.delete('/categories', categoryControllers.deleteCategory);



module.exports = router;
