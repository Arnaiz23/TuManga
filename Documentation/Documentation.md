<h1 style="display:flex;width=100%;justify-content:center;align-items:center;gap: 15px"><img src="../layout/assets/images/BrandT2.png" alt="arnaizDev brand" style="width:120px" /> TuManga</h1>

## Steps

- Design all the views of the frontend
- Mock-up the design in HTML, CSS and JS
- Create the backend
- Create the frontend


## Complete

- Design the views
- Mock-up

## Missing

- Backend
- Frontend

---

## Index

* [BBDD](#bbdd)
    * [Collections](#collections)
* [Backend](#backend)
    * [Dependencies](#dependencies)
    * [Routes](./Routes.md)
* [Frontend](#frontend)

---

## BBDD

- Collections:
    - Products
    - Users
    - Billing
    - Roles
    - Orders
    - Address
    - Comments


[Information](./Collections.md)

---

## **Backend**

    The total price in bbdd or backend??

### Dependencies

* Express
* body-parser
* mongoose
* connect-multiparty
* validator
* nodemon (DEV)
* bcryptjs
* jsonwebtoken
* CORS
* Helmet


## Init

Create all the roles automatic

## Routes

The principal route is "/api/v1"


## Middlewares

* Admin
* Vendor
* Logged
* Handle errors ¿?


### Options

* Products
    * get -> all and public
    * delete, update, post ->  Only if admin or vendor
* User
    * get -> admin, user or vendor
    * update -> admin, user or vendor
    * delete -> admin, user or vendor
    * post -> all and public


### Extra information

* Email save in lowercase. In the checkin, convert the email in lowercase and compare
* Create a document with the error codes and document it ¿?
* Create a middleweare for errors ¿?
* Send email for recover password YES
* Paypal or stripe PROBABLY
* reCAPTCHA YES
* Online chat PROBABLY
* Button up YES
* Pagination YES
* Filter for x price ¿?
* Comments YES
* Think in a difference of the role owner and role employee


---
## Frontend

### Missing views

* adminPanel -> filter
* Format the dates
* Sort by x
* Component error
* Slider in Home (Splide is an alternative)
* Alerts of the data.message in Platform
* Change the role in the usersTable
* Max-heigth in the platformData -> Look in the PlatformProducts


### Views for public

* Public -> public web
* User -> public web and user section
* Employee -> public web, user section and adminPanel
    * The role section NO
* Admin -> public web, user section and all the adminPanel sections


### Extra information

* If the user want delete the account, give the option to disable the account. If dont want, delete the account. (Confirm)
* When the web fetch the products, check if the product.stock > 0
  * No -> btnAdd disabled (red) -> does not work the createOrder or addProductOrder
  * Yes -> all normal
* In adminPanel of the employee, don't show the total earnings
* In adminPanel -> Create the system to search users and products (Ok in adminPanel2)

### Complete views

* Home
* Account
* Login
* Register
* Mangas
* AccountCards
* AccountAddress
* AccountOrders
* AccountComments
* ProductDetail
* Payment
* OrderDetail
* ShoppingCart


### Input file Admin

![Image](..%5Clayout%5Cassets%5Cimages%5CinputFile.PNG)