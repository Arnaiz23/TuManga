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
    - [Shopping Cart](#shopping-cart)
    - [Payment (OK)](#payment-ok)
    - [Product](#product)
    - [Login](#login)
    - [Register (OK)](#register-ok)
    - [Email](#email)
    - [Admin Panel](#admin-panel)
    - [Admin Panel 2](#admin-panel-2)
    - [Admin Panel 3](#admin-panel-3)
    - [Admin Panel 4](#admin-panel-4)
    - [Order details](#order-details)
    - [Others](#others)
  - [Products](#products)
  - [Search](#search)
  - [Filter](#filter)
  - [Sort](#sort)
  - [User](#user)
  - [Billing](#billing)
  - [Orders](#orders)
  - [Address](#address)
  - [Comments](#comments)
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


### Shopping Cart

* Shopping cart of a user with the State === P (token)
    * .get /order/:state {authorization: Bearer token} and Middleweare is user or high
* Edit cart of a user with the State === P -> new data and delete product (token)
    * .put /order/:state {authorization: Bearer token}  and Middleweare is user or high
    * .delete /order/:state {authorization: Bearer token} -> only if order is empty and Middleweare is user or high

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

### Product

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
* Insert a new comment (Token)
    * .post /comment {authorization: Bearer token} and middleweare is user or high
> OK
* Update or create a new order (Token{id} and Product.id)
    * .post /order {authorization: Bearer token} -> Middleweare is user or high
    * .put /order/:state {authorization: Bearer token} -> Middleweare is user or high


### Login

* Check email and password -> Send Token (Option remember me)
    * .post /login   -> Recieve token
> OK
* Send a email for recover password
    * .post /recover


### Register (OK)

* Receive email and 2 password, all correct -> create new user and send Token
    * .post /user   -> Recieve token
> OK


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
    > OK without middleweare
    * .get /products -> Middleweare {authorization: Bearer token}
    > OK without middleweare
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
    > OK without middleweare
    * .post /product -> Middleweare {authorization: Bearer token}
    > OK without middleweare
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
> OK


<!-- ------------------------------------------------------------------------------ -->
---

## Products

* Get the 8 new products
    * .get /products/new
* Create a new product º
    * .post /product
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

## Sort

* Sort mangas or light novels *
    * .get /sort/products/manga/:option&:limit&:skip
* Sort merchandising *
    * .get /sort/products/merchandising/:option&:limit&:skip
> \* Could be reused


## User

* Create new user (Register) **(not admin)**
    * .post /user
* Get all users º
    * .get /users
* Get user with token
    * .get /user {Authorization: Bearer token}
* Change user state with token
    * .patch /user {Authorization: Bearer token}
* Login
    * .post /login


## Billing

* Create card
    * .post /card {Authorization: Bearer token}
* Get all cards
    * .get /cards
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

---

## Missing

* \º All the middleweares
* Reuse the trycatch jwt
* Create the user admin automatically
* No send the password_hash