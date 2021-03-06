const { Router } = require('express');

const router = Router();

const controllers = require('../controllers/apiControllers');
const middleweares = require('../middleweares/middleweare')

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/images'});

router.get("/", controllers.test);

// * --------------------- PRODUCTS ----------------------------

router.get("/products/new", controllers.getNewProducts); // Get the 8 new products
router.get("/products/mangas/:limit&:skip", controllers.getMangas); // Get mangas or light novel 8 to 8
router.get("/products/merchandising/:limit&:skip", controllers.getMerchandising); // Get merchandising 8 to 8
router.get("/products", middleweares.isEmployee, controllers.getAllProducts); // Get all products
router.get("/product/:id", controllers.getProduct); // Get one product

// * -----------------------------------------------------------

// * ----------------------- USER ------------------------------

router.post("/user", controllers.createUser); // Create a new user
router.get("/user", middleweares.isUser, controllers.getUser); // Get one user with token
router.patch("/user", middleweares.isUser, controllers.changeUserState); // Change the state of user
router.post("/login", controllers.login); // Login
router.put("/user", middleweares.isUser, controllers.updateUser); // Update the user
router.put("/user/password", middleweares.isUser, controllers.updatePasswords); // Change password
router.delete("/user", middleweares.isUser, controllers.deleteUser); // Delete the user

// * -----------------------------------------------------------

// * ---------------------- ORDERS -----------------------------

router.get("/order/process", middleweares.isUser, controllers.getOrderProccess); // Get the user order with state === "P"
router.post("/order", middleweares.isUser, controllers.createOrder); // Create new order
router.patch("/order", middleweares.isUser, controllers.addProductOrder); // Add product in the order that have state === "P"
router.put("/order", middleweares.isUser, controllers.updateOrder); // Finish the order
router.get("/orders/user", middleweares.isUser, controllers.getUserOrders); // Get all the orders of a user
router.get("/order/cart", middleweares.isUser, controllers.getOrderCart); // Get the shopping cart
router.put("/order/product", middleweares.isUser,  controllers.updateShoppingCart); // Delete a product of a cart
router.get("/order/:id", middleweares.isUser, controllers.getOrderId); // Get one order

// * -----------------------------------------------------------

// * --------------------- BILLING -----------------------------

router.post("/card" , middleweares.isUser, controllers.createCard); // Create new card
router.get("/cards/last", middleweares.isUser, controllers.getLastCards); // Get 2 last cards
router.get("/cards/user", middleweares.isUser, controllers.getUserCards); // Get all the cards of a user
router.delete("/card/:id", middleweares.isUser, controllers.deleteCard); // Delete one card

// * -----------------------------------------------------------
// * --------------------- ADDRESS -----------------------------

router.post("/address", middleweares.isUser, controllers.createAddress); // Create address
router.get("/address/user", middleweares.isUser, controllers.getUserAddress); // Get user address
router.delete("/address/:id", middleweares.isUser, controllers.deleteAddress); // Delete address
router.put("/address/:id", middleweares.isUser, controllers.updateAddress); // Update address
router.get("/address/last", middleweares.isUser, controllers.getLastAddress); // Get last 2 address of an user

// * -----------------------------------------------------------

// * --------------------- COMMENTS ----------------------------

router.get("/comments/product/:idProduct", controllers.getCommentsProduct); // Get all the comments of a one product
router.post("/comment", middleweares.isUser, controllers.createComment); // Create a comment
router.get("/comments/user", middleweares.isUser, controllers.getUserComments); // Get user comments
router.delete("/comment/:idComment", middleweares.isUser, controllers.deleteComment); // Delete a comment

// * -----------------------------------------------------------

// * --------------------- SEARCH ----------------------------

router.get("/search/products/:search", controllers.searchProducts); // Search in products

// * ---------------------------------------------------------

// * --------------------- FILTER ----------------------------

router.get("/filter/product/:type/:option&:limit&:skip", controllers.filterProduct); // Filter any product
router.get("/filters/:type" , controllers.getFilters ); // Get all the filter

// * ---------------------------------------------------------

// * --------------------- SORT ----------------------------

router.get("/sort/products/manga/:option&:limit&:skip", controllers.sortManga); // Sort mangas
router.get("/sort/products/merchandising/:option&:limit&:skip", controllers.sortMerchandising); // Sort merchandising

// * ---------------------------------------------------------

// * --------------------- PASSWORD ----------------------------

router.post("/email", controllers.sendEmail); // Send email if forgot the password
router.post("/recover/:token", controllers.recoverPassword); // Change the password

// * --------------------- ADMIN ----------------------------

router.get("/total/data", middleweares.isEmployee, controllers.totalAdminData); // Get the total orders (Admin)
router.get("/total/users", middleweares.isEmployee, controllers.totalUsers); // Get the total users (Admin)
router.get("/total/earnings", middleweares.isOwner, controllers.totalEarnings); // Get the total earnings (Admin)
router.get("/products/sales/:limit", middleweares.isEmployee, controllers.mostBestsellers); // Get the most bestsellers products
router.get("/admin/orders", middleweares.isEmployee, controllers.getAllOrders); // Get all the orders
router.get("/admin/users/:filter?", middleweares.isEmployee, controllers.getAllUsers); // Get all users
router.get("/admin/cards", middleweares.isEmployee, controllers.getAllCards); // Get all cards
router.get("/admin/roles", middleweares.isAdmin, controllers.getAllRoles); // Get all roles
router.get("/admin/comments", middleweares.isEmployee, controllers.getAllComments); // Get all comments
router.put("/admin/user/:id", middleweares.isAdmin, controllers.updateUserAdmin); // Update one user (Admin)
router.put("/admin/product/:id", middleweares.isEmployee, controllers.updateProductAdmin); // Update one product (Admin)
router.get("/admin/user/:id", middleweares.isEmployee, controllers.getUserAdmin); // Get one user (Admin)
router.delete("/admin/user/:id", middleweares.isAdmin, controllers.deleteUserAdmin); // Delete one user (Admin)
router.post("/admin/user", middleweares.isAdmin, controllers.createUserAdmin); // Create one user
router.post("/product", middleweares.isEmployee, controllers.newProduct); // Create a new product
router.get("/admin/search/:search&:option", middleweares.isEmployee, controllers.searchAdmin); // Search users
router.delete("/admin/product/:id", middleweares.isEmployee, controllers.deleteProduct); // Delete a product
router.get("/admin/role/search/:search", middleweares.isAdmin, controllers.searchRole); // Search roles
router.post("/admin/role", middleweares.isAdmin, controllers.createRole); // Create role
router.get("/admin/role/:id", middleweares.isAdmin, controllers.getOneRole) ; // Get one role
router.put("/admin/role/:id", middleweares.isAdmin, controllers.updateRole); // Update one role
router.delete("/admin/role/:id", middleweares.isAdmin, controllers.deleteRole); // Delete one role
router.delete("/admin/comment/:id", middleweares.isEmployee, controllers.deleteCommentAdmin); //Delete one comment

// * ---------------------------------------------------------

// * --------------------- IMAGES ----------------------------

router.get("/image/:image", controllers.getImage); // Get a image
router.post("/image/:id", [middleweares.isEmployee, md_upload],controllers.uploadImage); // Upload a image

// * ---------------------------------------------------------

module.exports = router;