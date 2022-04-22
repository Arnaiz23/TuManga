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

// * ----------------------- USER ------------------------------

router.post("/user", controllers.createUser); // Create a new user
router.get("/users", controllers.getAllUsers); // Get all users
router.get("/user", controllers.getUser); // Get one user with token

// * -----------------------------------------------------------

// * --------------------- SEARCH ----------------------------

router.get("/search/products/:search", controllers.searchProducts); // Search in products

// * ---------------------------------------------------------

// * --------------------- FILTER ----------------------------

router.get("/filter/product/:type/:option&:limit&:skip", controllers.filterProduct); // Filter any product

// * ---------------------------------------------------------

// * --------------------- SORT ----------------------------

router.get("/sort/products/manga/:option&:limit&:skip", controllers.sortManga); // Sort mangas
router.get("/sort/products/merchandising/:option&:limit&:skip", controllers.sortMerchandising); // Sort merchandising

// * ---------------------------------------------------------

module.exports = router;