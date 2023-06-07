const express = require('express');
const router = express.Router();

const { ProductController } = require('../controllers');
const { isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', ProductController.get_products);
router.post('/create', isAdminVerifier, ProductController.create_product);
router.get('/:id', ProductController.get_product);
router.put('/:id', isAdminVerifier, ProductController.update_product);
router.delete('/delete/:id', isAdminVerifier, ProductController.delete_user);

module.exports = router;