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

* Sort by x
* Component error
* If I want, create title for mobile in StatisticsBestsellers (modal)

### Views for public

* Public -> public web
* User -> public web and user section
* Employee -> public web, user section and adminPanel
    * The role section NO
* Admin -> public web, user section and all the adminPanel sections

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
