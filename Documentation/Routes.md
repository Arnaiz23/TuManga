<h1 align="center"><img src="../layout/assets/images/BrandTransparentMD.png" alt="arnaizDev brand" /> TuManga</h1>

# **Routes**

### Index

* [Index](#index)
* [Search](#search)
* [Mangas](#mangas)
* [Merchandising](#merchandising)
* [My account](#my-account)
* [Shopping cart](#shopping-cart)
* [Payment](#payment)
* [Product](#product)
* [Login](#login)
* [Logout](#logout)
* [Email](#email)
* [Admin panel](#admin-panel)
* [Admin panel 2](#admin-panel-2)
* [Admin panel 3](#admin-panel-3)
* [Admin panel 4](#admin-panel-4)
* [Order details](#order-details)
* [Others](#others)

---

### Index

* Lastest 8 news products
    * products.State(new).limit(8)
        * .get /products/news .limit(8)


### Search

* Products equal string search
    * .get /search/products/:search
* Create and add a product in order
    * .post /order {authorization: Bearer token} -> Middleweare is user or high

### Mangas

* All the mangas with paginate. Limit and skip. 8 to 8 
    * .get /products/manga/:options
        * /products/limit=8&skip=8
* Sort (8 to 8)
    * **/sort/products/manga/price=asc&state=&sales=limit=&skip=**
    * products.price(high)
        * .get /sort/products/manga/:option
    * products.price(down)
        * .get /sort/products/manga/:option
    * products.state(new)
        * .get /sort/products/manga/:option
    * products.Nº Sales(high)
        * .get /sort/products/manga/:option
* Filter (8 to 8)
    * products.type(type) {light novel or manga}
        * .get /filter/product/manga/:option
            * /filter/product/manga/type=manga&category=isekai
    * products.category(category)
        * .get /filter/product/manga/:option


### Merchandising

* ALl the merchandising with paginate. Limit and skip. 8 to 8
    * .get /product/merchandising/:options
        * /product/merchandising/limit=8&skip=0
* Sort (8 to 8)
    * **/sort/products/merchandising/price=asc&state=&sales=limit=&skip=**
    * products.price(high)
        * .get /product/merchandising/:option
    * products.price(down)
        * .get /sort/product/merchandising/:option
    * products.state(new)
        * .get /sort/product/merchandising/:option
    * products.Nº Sales(high)
        * .get /sort/product/merchandising/:option
* Filter (8 to 8)
    * products.category(category) {nendoroid or funko}
        * .get /filter/product/merchandising/:option
            * /filter/product/merchandising/category=nendoroid

### My account

* My information
    * The user with the token
        * .get /user {authorization: Bearer token}
* My orders
    * All the orders of a user with token. Only the orders that had the property state === "F"
        * .get /orders/:state {authorization: Bearer token}
            * /orders/state=F
* My address
    * All the address of a user with token
        * .get /address {authorization: Bearer token}
    * Create a new address (token)
        * .post /address/:id {authorization: Bearer token}
    * Delete address (1) (token)
        * .delete /address/:id {authorization: Bearer token}
    * Edit address (token)
        * .put /address/:id {authorization: Bearer token}
* My cards
    * All the cards of a user with token
        * .get /cards {authorization: Bearer token}
    * Delete a card (1) (token)
        * .delete /card/:id {authorization: Bearer token}
* My comments
    * All the comments of a user with token
        * .get /comments {authorization: Bearer token}
    * Delete a comment (1) (token)
        * .delete /comment/:id {authorization: Bearer token}


### Shopping Cart

* Shopping cart of a user with the State === P (token)
    * .get /order/:state {authorization: Bearer token} and Middleweare is user or high
* Edit cart of a user with the State === P -> new data and delete product (token)
    * .put /order/:state {authorization: Bearer token}  and Middleweare is user or high
    * .delete /order/:state {authorization: Bearer token} -> only if order is empty and Middleweare is user or high

### Payment

* 2 last address of a user (Token)
    * .get /address/:limit {authorization: Bearer token} and Middleweare is user or high
* 2 last cards of a user (Token)
    * .get /cards/:limit {authorization: Bearer token} and Middleweare is user or high
* Edit cart of a user with the State === P -> new data (address and card) (token)
    * put /order/:state {authorization: Bearer token}
* Shopping cart of a user with the State === P (token)
    * .get /order/:state {authorization: Bearer token}
* Edit cart of a user with the State === P -> State = F (token) (Finalished the order)
    * .patch /order/:state {authorization: Bearer token}

### Product

* 1 product with its id
    * .get /product/:id
* All the comments from this product (id) "Product.comments"
    * Send array comments data
    * .get /comments/:idProduct
        * Recieve the idProduct, petition product and get the array of idComments and do a petition Comments with this ids. **Search examples**
* Delete comment if the user is owner
    * .delete /comment/idComment {authorization: Bearer token} and middleweare is user or high
    > if is admin or vendor, delete (Middleweare)
* Insert a new comment (Token)
    * .post /comment/idProduct {authorization: Bearer token} and middleweare is user or high
* Update or create a new order (Token{id} and Product.id)
    * .post /order {authorization: Bearer token} -> Middleweare is user or high
    * .put /order/:state {authorization: Bearer token} -> Middleweare is user or high


### Login

* Check email and password -> Send Token (Option remember me)
    * .post /login   -> Recieve token
* Send a email for recover password
    * .post /recover


### Logout

* Receive email and 2 password, all correct -> create new user and send Token
    * .post /user   -> Recieve token


### Email

* Receive email and check if exists
    * exists -> send email
    * not exists -> no send email but pretend yes (for more security)
    * .post /email


### Admin Panel

* **(Token admin or vendor)**
* Get the total of the collection "Orders" (return only the number)
    * .get /total/orders -> Middleweare  {authorization: Bearer token}
* Get the total of the collection "Users" (return only the number)
    * .get /total/users -> Middleweare  {authorization: Bearer token}
* Get the total_earnings of the collection "Orders" (return only the number) **Miss**
   * Go to all the orders and save in a variable the result of the price
   * Create a new field in the Orders collection with the total price???
* Get the 5 or 10 most best sellers products for the statistics
   * Filter with the "nº sales"
   * .get /products/sales/:limit -> Middleweare  {authorization: Bearer token}

### Admin Panel 2

* **(Token admin or vendor)**
* Get all the "Users or option selected"
    * .get /users -> Middleweare {authorization: Bearer token}
    * .get /products -> Middleweare {authorization: Bearer token}
    * .get /orders -> Middleweare {authorization: Bearer token}
    * .get /roles -> Middleweare {authorization: Bearer token}
    * .get /comments -> Middleweare {authorization: Bearer token}

### Admin Panel 3

* **(Token admin or vendor)**
* Edit the option selected
    * .put /user/:id -> Middleweare {authorization: Bearer token}
    * .put /product/:id -> Middleweare {authorization: Bearer token}
    * .put /order/:id -> Middleweare {authorization: Bearer token}
    * .put /role/:id -> Middleweare {authorization: Bearer token}
    * .put /comment/:id -> Middleweare {authorization: Bearer token}
* Get this user(id)
    * .get /user/:id -> Middleweare {authorization: Bearer token}
* Delete this user(id)
    * .delete /user/:id -> Middleweare {authorization: Bearer token}

### Admin Panel 4

* **(Token admin or vendor)**
* Insert the option selected
    * .post /user -> Middleweare {authorization: Bearer token}
    * .post /product -> Middleweare {authorization: Bearer token}
    * .post /order -> Middleweare {authorization: Bearer token}
    * .post /role -> Middleweare {authorization: Bearer token}
    * .post /comment -> Middleweare {authorization: Bearer token}

### Order details

* Get the order that had the id who recive
    * .get /order/:id {authorization: Bearer token} and middleweare is user or high


### Others

* Get image
    * .get /image/:id
* Upload image
    * .post /image/:id?
    * id upload in a specific product
* Search an user in admin ????
* Change the state of the user (in adminPanel or account)
    * .patch /user/:state