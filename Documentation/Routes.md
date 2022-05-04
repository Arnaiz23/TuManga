<h1 align="center"><img src="../layout/assets/images/BrandTransparentMD.png" alt="arnaizDev brand" /> TuManga</h1>

# **Routes**

### Index

- [**Routes**](#routes)
    - [Index](#index)
    - [Index (OK)](#index-ok)
    - [Search (OK)](#search-ok)
    - [Mangas (OK)](#mangas-ok)
    - [Merchandising (OK)](#merchandising-ok)
    - [My account (OK)](#my-account-ok)
    - [Shopping Cart (OK)](#shopping-cart-ok)
    - [Payment (OK)](#payment-ok)
    - [Product (OK)](#product-ok)
    - [Login (OK)](#login-ok)
    - [Register (OK)](#register-ok)
    - [Email (In process on the branch "recoverPassword")](#email-in-process-on-the-branch-recoverpassword)
    - [Admin Panel (OK)](#admin-panel-ok)
    - [Admin Panel 2 (OK)](#admin-panel-2-ok)
    - [Admin Panel 3 (OK)](#admin-panel-3-ok)
    - [Admin Panel 4 (OK)](#admin-panel-4-ok)
    - [Order details (OK)](#order-details-ok)
  - [Products](#products)
  - [Search](#search)
  - [Filter](#filter)
  - [Sort](#sort)
  - [User](#user)
  - [Billing](#billing)
  - [Orders](#orders)
  - [Address](#address)
  - [Comments](#comments)
  - [Email (In process on the branch "recoverPassword")](#email-in-process-on-the-branch-recoverpassword-1)
  - [Admin](#admin)
  - [Images](#images)
  - [Missing](#missing)

---

### Index (OK)

* Lastest 8 news products
    * products.State(new).limit(8)
        * .get /products/news .limit(8)
        > OK


### Search (OK)

* Products equal string search
    * .get /search/products/:search
    > OK
* Create and add a product in order
    * .post /order {authorization: Bearer token} -> Middleweare is user or high
    > OK without middleweare

### Mangas (OK)

* All the mangas with paginate. Limit and skip. 8 to 8 
    * .get /products/manga/:limit&:skip
        * /products/manga/8&8
        > OK
* Sort (8 to 8)
> OK
    * **/sort/products/manga/price=asc&state=&sales=limit=&skip=**
    * products.price(high) desc
        * .get /sort/products/manga/:option
    * products.price(down) asc
        * .get /sort/products/manga/:option
    * products.state(new)
        * .get /sort/products/manga/:option
    * products.Nº Sales(high)
        * .get /sort/products/manga/:option
* Filter (8 to 8)
> OK
    * products.type(type) {light novel or manga}
        * .get /filter/product/manga/:option
            * /filter/product/manga/type=manga&category=isekai
    * products.category(category)
        * .get /filter/product/manga/:option


### Merchandising (OK)

* ALl the merchandising with paginate. Limit and skip. 8 to 8
    * .get /product/merchandising/:limit&:skip
        * /product/merchandising/8&8
        > OK
* Sort (8 to 8)
> OK
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
> OK
    * products.category(category) {nendoroid or funko}
        * .get /filter/product/merchandising/:option
            * /filter/product/merchandising/category=nendoroid

### My account (OK)

* My information
    * The user with the token
        * .get /user {authorization: Bearer token}
    > OK
* My orders
    * All the orders of a user with token. Only the orders that had the property state === "F"
        * .get /orders/:state {authorization: Bearer token}
            * /orders/state=F
    > OK
* My address
    * All the address of a user with token
        * .get /address {authorization: Bearer token}
    > OK
    * Create a new address (token)
        * .post /address/:id {authorization: Bearer token}
    > OK
    * Delete address (1) (token)
        * .delete /address/:id {authorization: Bearer token}
    > OK
    * Edit address (token)
        * .put /address/:id {authorization: Bearer token}
    > OK
* My cards
    * All the cards of a user with token
        * .get /cards {authorization: Bearer token}
    > OK
    * Delete a card (1) (token)
        * .delete /card/:id {authorization: Bearer token}
    > OK
* My comments
    * All the comments of a user with token
        * .get /comments/user {authorization: Bearer token}
    > OK
    * Delete a comment (1) (token)
        * .delete /comment/:idComment {authorization: Bearer token}
    > OK


### Shopping Cart (OK)

* Shopping cart of a user with the State === P (token)
    * .get /order/cart {authorization: Bearer token} and Middleweare is user or high
> OK
* Edit cart of a user with the State === P -> new data and delete product (token)
    * .put /order/:state {authorization: Bearer token}  and Middleweare is user or high
    * .delete /order/:state {authorization: Bearer token} -> only if order is empty and Middleweare is user or high
> OK

### Payment (OK)

* Create new card
    * .post /card {authorization: Bearer token} and Middleweare is user or high
> OK without middleweares
* 2 last address of a user (Token)
    * .get /address/:limit {authorization: Bearer token} and Middleweare is user or high
>OK without middleweare
* 2 last cards of a user (Token)
    * .get /cards/:limit {authorization: Bearer token} and Middleweare is user or high
> OK without middleweares
* Edit cart of a user with the State === P -> new data (address and card) (token)
    * put /order/:state {authorization: Bearer token}
> OK without middleweares
* Shopping cart of a user with the State === P (token)
    * .get /order/:state {authorization: Bearer token}
> OK without middleweares
* Edit cart of a user with the State === P -> State = F (token) (Finalished the order)
    * .patch /order/:state {authorization: Bearer token}
> OK without middleweares

### Product (OK)

* 1 product with its id
    * .get /product/:id
> OK
* All the comments from this product (id) "Product.comments"
    * Send array comments data
    * .get /comments/:idProduct
        * Recieve the idProduct, petition product and get the array of idComments and do a petition Comments with this ids. **Search examples**
> OK
* Delete comment if the user is owner
    * .delete /comment/idComment {authorization: Bearer token} and middleweare is user or high
    > if is admin or vendor, delete (Middleweare)
> OK
* Insert a new comment (Token)
    * .post /comment {authorization: Bearer token} and middleweare is user or high
> OK
* Update or create a new order (Token{id} and Product.id)
    * .post /order {authorization: Bearer token} -> Middleweare is user or high
    * .put /order/:state {authorization: Bearer token} -> Middleweare is user or high
> OK


### Login (OK)

* Check email and password -> Send Token (Option remember me)
    * .post /login   -> Recieve token
> OK


### Register (OK)

* Receive email and 2 password, all correct -> create new user and send Token
    * .post /user   -> Recieve token
> OK


### Email (In process on the branch "recoverPassword")

* Receive email and check if exists
    * exists -> send email
    * not exists -> no send email but pretend yes (for more security)
    * .post /email
* Recover passsword
  * .patch /recover 



### Admin Panel (OK)

* **(Token admin or vendor)**
* Get the total of the collection "Orders" (return only the number)
    * .get /total/orders -> Middleweare  {authorization: Bearer token}
> OK
* Get the total of the collection "Users" (return only the number)
    * .get /total/users -> Middleweare  {authorization: Bearer token}
> OK
* Get the total_earnings of the collection "Orders" (return only the number) **Miss**
   * Go to all the orders and save in a variable the result of the price
   * Create a new field in the Orders collection with the total price???
> OK
* Get the 5 or 10 most best sellers products for the statistics
   * Filter with the "nº sales"
   * .get /products/sales/:limit -> Middleweare  {authorization: Bearer token}
> OK

### Admin Panel 2 (OK)

* **(Token admin or vendor)**
* Get all the "Users or option selected"
    * .get /users -> Middleweare {authorization: Bearer token}
    > OK without middleweare
    * .get /products -> Middleweare {authorization: Bearer token}
    > OK without middleweare
    * .get /orders -> Middleweare {authorization: Bearer token}
    > OK without middleweare
    * .get /roles -> Middleweare {authorization: Bearer token}
    > OK without middleweare
    * .get /comments -> Middleweare {authorization: Bearer token}
    > OK without middleweare

### Admin Panel 3 (OK)

* **(Token admin or vendor)**
* Edit the option selected
    * .put /admin/user/:id -> Middleweare {authorization: Bearer token}
    > OK
    * .put /admin/product/:id -> Middleweare {authorization: Bearer token}
    > OK
> OK
* Get this user(id)
    * .get /user/:id -> Middleweare {authorization: Bearer token}
> OK
* Delete this user(id)
    * .delete /user/:id -> Middleweare {authorization: Bearer token}
> OK

### Admin Panel 4 (OK)

* **(Token admin or vendor)**
* Insert the option selected
    * .post /user -> Middleweare {authorization: Bearer token}
    > OK without middleweare
    * .post /product -> Middleweare {authorization: Bearer token}
    > OK without middleweare

### Order details (OK)

* Get the order that had the id who recive
    * .get /order/:id {authorization: Bearer token} and middleweare is user or high

---

## Products

* Get the 8 new products
    * .get /products/new
* Get mangas or ligth novels with paginate *
    * .get /products/manga/:limit&:skip
* Get merchandising with paginate *
    * .get /products/merchandising/:limit&:skip
> \* Could be reused
* Get all products
    * .get /products
* Get one product
    * .get /product/:id


## Search

* Search in products
    * .get /search/products/:search


## Filter

* Filter any product
    * .get /filter/product/:type/:option&:limit&:skip
> If you dont need a concrete option(category), write null
> If you need many categories, split ;

## Sort

* Sort mangas or light novels *
    * .get /sort/products/manga/:option&:limit&:skip
* Sort merchandising *
    * .get /sort/products/merchandising/:option&:limit&:skip
> \* Could be reused


## User

* Create new user (Register) **(not admin)**
    * .post /user
* Get user with token
    * .get /user {Authorization: Bearer token}
* Change user state with token
    * .patch /user {Authorization: Bearer token}
* Login
    * .post /login
    > If the user has the state = "Disabled" and login, question in the Frontend if want change the state. Yes -> change state || No -> delete the token and logout
* Update the user
  * .put /user {Authorization: Bearer token}
* Delete the user
  * .delete /user {Authorization: Bearer token}
    * When you delete the user -> delete his comments, his address, his billings and delete the _id comment of it product


## Billing

* Create card
    * .post /card {Authorization: Bearer token}
* Get last 2 cards
    * .get /cards/last {Authorization: Bearer token}
* Get the user cards
  * .get /cards/user {Authorization: Bearer token}
* Delete one card
  * .delete /card/:id {Authorization: Bearer token}

## Orders

* Create order
  * .post /order {Authorization: Bearer token}
* Add a new product in the user order that have state === "P"
  * .patch /order {Authorization: Bearer token}
* Finish the order
  * .put /order {Authorization: Bearer token}
* User orders
  * .get /orders/user {Authorization: Bearer token}
* Get the shopping cart of a user
  * .get /order/cart {authorization: Bearer token}
* Delete one product of the shopping cart
  * .put /order/product {authorization: Bearer token}
* Get one order with id (OrderDetails)
  * .get /order/:id {authorization: Bearer token} and middleweare is user or high


## Address

* Create address
  * .post /address {Authorization: Bearer token}
* Get the user address
  * .get /address/user {Authorization: Bearer token}
* Delete one address
  * .delete /address/:id {Authorization: Bearer token}
* Update one address
  * .put /address/:id {Authorization: Bearer token}
* Get last 2 address of an user
  * .get /address/last {Authorization: Bearer token}


## Comments

* Get all the comments of a one product
  * .get /comments/product/:idProduct
* Create new comment
  * .post /comment {authorization: Bearer token}
* Get all comments of an user
  * .get /comments/user {authorization: Bearer token}
* Delete a comment
  * .delete /comment/:idComment {authorization: Bearer token}

## Email (In process on the branch "recoverPassword")

* Send email (In this route is created the tokenRecover)
  * .post /email
* Change the password (In this route is deleted the tokenRecover)
  * .post /recover/:token


## Admin

* Get the total orders
  * .get /total/orders -> Middleweare {Authorization: Bearer token}
* Get the total users
  * .get /total/users -> Middleweare {Authorization: Bearer token}
* Get the total earnings
  * .get /total/earnings -> Middleweare {Authorization: Bearer token}
* Get the most betsellers products
  * .get /products/sales/:limit -> Middleweare {authorization: Bearer token}
* Get all orders
  * .get /admin/orders -> Middleweare {authorization: Bearer token}
* Get all users º
  * .get /admin/users -> Middleweare {authorization: Bearer token}
* Get all cards º
  * .get /admin/cards -> Middleweare {authorization: Bearer token}
* Get all roles º
  * .get /admin/roles -> Middleweare {authorization: Bearer token}
* Get all comments º
  * .get /admin/comments -> Middleweare {authorization: Bearer token}
* Update one user (Admin)
  * .put /admin/user/:id -> Middleweare {authorization: Bearer token}
* Update one product (Admin)
  * .put /admin/product/:id -> Middleweare {authorization: Bearer token}
* Get one user (Admin)
  * .get /admin/user/:id -> Middleweare {authorization: Bearer token}
* Delete one user (Admin)
  * .delete /admin/user/:id -> Middleweare {authorization: Bearer token}
* Create one user
  * .post /admin/user -> Middleweare {authorization: Bearer token}
* Create a new product º
  * .post /product
* Search products or users
  * .get /admin/search/:search&:option -> Middleweare {authorization: Bearer token}
    * search -> params you find
    * option -> user or product


## Images
* Get image
  * .get /image/:image
* Upload an image
  * .post /image/:idProduct-> Middleweare {authorization: Bearer token}

---

## Missing

* \º All the middleweares