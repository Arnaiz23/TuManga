const { Router } = require('express');

const router = Router();

const controllers = require('../controllers/apiControllers');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/images'});

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
router.patch("/user", controllers.changeUserState); // Change the state of user
router.post("/login", controllers.login); // Login

// * -----------------------------------------------------------

// * ---------------------- ORDERS -----------------------------

router.get("/order/process", controllers.getOrderProccess); // Get the user order with state === "P"
router.post("/order", controllers.createOrder); // Create new order
router.patch("/order", controllers.addProductOrder); // Add product in the order that have state === "P"
router.put("/order", controllers.updateOrder); // Finish the order
router.get("/orders/user", controllers.getUserOrders); // Get all the orders of a user
router.get("/order/cart", controllers.getOrderCart); // Get the shopping cart
router.put("/order/product",  controllers.updateShoppingCart); // Delete a product of a cart

// * -----------------------------------------------------------

// * --------------------- BILLING -----------------------------

router.post("/card" , controllers.createCard); // Create new card
router.get("/cards", controllers.getAllCards); // Get all cards
router.get("/cards/last", controllers.getLastCards); // Get 2 last cards
router.get("/cards/user", controllers.getUserCards); // Get all the cards of a user
router.delete("/card/:id", controllers.deleteCard); // Delete one card

// * -----------------------------------------------------------
// * --------------------- ADDRESS -----------------------------

router.post("/address", controllers.createAddress); // Create address
router.get("/address/user", controllers.getUserAddress); // Get user address
router.delete("/address/:id", controllers.deleteAddress); // Delete address
router.put("/address/:id", controllers.updateAddress); // Update address
router.get("/address/last", controllers.getLastAddress); // Get last 2 address of an user

// * -----------------------------------------------------------

// * --------------------- COMMENTS ----------------------------

router.get("/comments/product/:idProduct", controllers.getCommentsProduct); // Get all the comments of a one product
router.post("/comment", controllers.createComment); // Create a comment
router.get("/comments/user", controllers.getUserComments); // Get user comments
router.delete("/comment/:idComment", controllers.deleteComment); // Delete a comment

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