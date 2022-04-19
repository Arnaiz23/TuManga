# ![arnaizdev_brand](../layout/assets/images/BrandTransparentMD.png) TuManga

## **Routes**

### Index

* Lastest 8 news products
    * products.State(new).limit(8)


### Search

* Products equal string search

### Mangas

* All the mangas with paginate. Limit and skip. 8 to 8 
* Order (8 to 8)
    * products.price(high)
    * products.price(down)
    * products.state(new)
    * products.Nº Sales(high)
* Filter (8 to 8)
    * products.type(type) {light novel or manga}
    * products.category(category)


### Merchandising

* ALl the merchandising with paginate. Limit and skip. 8 to 8
* Order (8 to 8)
    * products.price(high)
    * products.price(down)
    * products.state(new)
    * products.Nº Sales(high)
* Filter (8 to 8)
    * products.type(type) {funko or nendoroid}
    * products.category(category)

### My account

* My information
    * The user with the token
* My orders
    * All the orders of a user with token
* My address
    * All the address of a user with token
    * Create a new address (token)
    * Delete address (1) (token)
    * Edit address (token)
* My cards
    * All the cards of a user with token
    * Delete a card (1) (token)
* My comments
    * All the comments of a user with token
    * Delete a comment (1) (token)


### Shopping Cart

* Shopping cart of a user with the State === P (token)
* Edit cart of a user with the State === P -> new data and delete product (token)

### Payment

* 2 last address of a user (Token)
* 2 last cards of a user (Token)
* Edit cart of a user with the State === P -> new data (address and card) (token)
* Shopping cart of a user with the State === P (token)
* Edit cart of a user with the State === P -> State = F (token) (Finalished the order)

### Product

* 1 product with its id
* All the comments from this product (id) "Product.comments"
    * Send array comments data
* Delete comment if the user is owner
* Insert a new comment (Token)
* Update or create a new order (Token{_id} and Product._id)


### Login

* Check email and password -> Send Token (Option remember me)
* Send a email for recover password


### Logout

* Receive email and 2 password, all correct -> create new user and send Token


### Email

* Receive email and check if exists
    * exists -> send email
    * not exists -> no send email but pretend yes (for more security)


### Admin Panel (Token admin or vendor)

* Get the total of the collection "Orders" (return only the number)
* Get the total of the collection "Users" (return only the number)
* Get the total_earnings of the collection "Orders" (return only the number)
   * Go to all the orders and save in a variable the result of the price
   * Create a new field in the Orders collection with the total price???
* Get the 5 or 10 most best sellers products for the statistics
   * Filter with the "nº sales"

### Admin Panel 2 (Token admin or vendor)

* Get all the "Users or option selected"

### Admin Panel 3 (Token admin or vendor)

* Edit the option selected
* Get this user(id)
* Delete this user(id)

### Admin Panel 4 (Token admin or vendor)

* Insert the option selected

### Order details

* Get the order that had the id who recive
