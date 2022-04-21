const { Router } = require('express');

const router = Router();

const controllers = require('../controllers/apiControllers');

router.get("/", controllers.test);

// * --------------------- PRODUCTS ----------------------------

router.get("/products/new", controllers.getNewProducts); // Get the 8 new products
router.post("/product", controllers.newProduct); // Create a new product
router.get("/products/manga/:limit&:skip", controllers.getMangas); // Get mangas or light novel 8 to 8
router.get("/products/merchandising/:limit&:skip", controllers.getMerchandising); // Get merchandising 8 to 8
router.get("/products", controllers.getAllProducts); // Get all products
router.get("/product/:id", controllers.getProduct); // Get one product

// * -----------------------------------------------------------

// * --------------------- SEARCH ----------------------------

router.get("/search/products/:search", controllers.searchProducts); // Search in products

// * ---------------------------------------------------------

// * --------------------- SORT ----------------------------

router.get("/sort/products/manga/:price&:state&:sales&:limit&:skip", controllers.sortManga); // Sort mangas

// * ---------------------------------------------------------

module.exports = router;