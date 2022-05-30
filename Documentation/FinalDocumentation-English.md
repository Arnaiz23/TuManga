<h1 style="display:flex;width=100%;justify-content:center;align-items:center;gap: 15px"><img src="https://tumanga.onrender.com/api/v1/image/BrandT2.png" alt="arnaizDev brand" style="width:120px" /> TuManga</h1>

## Index

- [Index](#index)
- [Introduction](#introduction)
- [Objectives](#objectives)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [Database](#database)
  - [Collections](#collections)
- [Backend](#backend)
- [Frontend](#frontend)
- [Steps](#steps)
- [Funcionalities](#funcionalities)
- [Annex](#annex)
- [Bibliography](#bibliography)



## Introduction

This projects consist in a e-commerce of mangas, ligth novels and merchandising related with the world of anime. I decide of created this shop because I love this world and I see which the shops related of this, have a minimalist design. This e-commerce has a familiar interface for the user/client.

## Objectives

The objectives are:
* Buy this articles at a quick form.
* See the information of your account
* Sell the articles for the part of the owner

## Technologies

I used this technologies:
<table>
    <tr>
        <th>Backend</th>
        <th>Frontend</th>
        <th>Database</th>
    </tr>
    <tr>
        <td>NodeJS</td>
        <td>ReactJS</td>
        <td>MongoDB</td>
    </tr>
</table>

## Deployment

For this step I used:
<table>
    <tr>
        <th>Backend</th>
        <th>Frontend</th>
        <th>Database</th>
    </tr>
    <tr>
        <td><a href="https://www.render.com" >Render</a></td>
        <td><a href="https://www.netlify.com" >Netlify</a></td>
        <td><a href="https://www.mongodb.com" >MongoDB Atlas</a></td>
    </tr>
</table>

## Database

As I mentioned previously, I used [MongoDB Atlas](https://www.mongodb.com).
This is a no-relational database. Its structure is formed at JSON (JavaScript Object Notation).

The name of the database is TuManga.

### Collections

This database has 7 collections that each one is formed for models:

<h3><b>Addresses</b></h3>This collections contains all the addresses of the registered users
<table>
    <tr>
        <th>Name</th>
        <th>Information</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>_id</td>
        <td>This field is created for default</td>
        <td>True</td>
    </tr>
    <tr>
        <td>user_id</td>
        <td>Is the ID of the user who is the owner of this address. Has a ref with the model <b>User</b></td>
        <td>True</td>
    </tr>
    <tr>
        <td>name</td>
        <td>Name of the address. EJ: Street Mi House</td>
        <td>True</td>
    </tr>
    <tr>
        <td>number</td>
        <td>The number of the house/building</td>
        <td>False</td>
    </tr>
    <tr>
        <td>Floor</td>
        <td>The floor of the house/building</td>
        <td>False</td>
    </tr>
    <tr>
        <td>name_person</td>
        <td>The name of the person who will be in the moment of the collection the order</td>
        <td>True</td>
    </tr>
    <tr>
        <td>location</td>
        <td>Name of the location which the building stay</td>
        <td>True</td>
    </tr>
    <tr>
        <td>telephone</td>
        <td>Telephone number of the contact person</td>
        <td>True</td>
    </tr>
    <tr>
        <td>Created_date</td>
        <td>Date of the created moment. Default of the actual date</td>
        <td></td>
    </tr>

<h3><b>Billings</b></h3>This collections contains all the data of the user cards
<table>
    <tr>
        <th>Name</th>
        <th>Information</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>_id</td>
        <td>This field is created for default</td>
        <td>True</td>
    </tr>
    <tr>
        <td>user_id</td>
        <td>Is the ID of the user who is the owner of this card. Has a ref with the model <b>User</b></td>
        <td>True</td>
    </tr>
    <tr>
        <td>card_name</td>
        <td>Name of the user which is write in the card</td>
        <td>True</td>
    </tr>
    <tr>
        <td>expiration_date</td>
        <td>The expiration date of the card</td>
        <td>True</td>
    </tr>
    <tr>
        <td>last_4_digits</td>
        <td>Last 4 digist of the card. It's used for show later</td>
        <td>True</td>
    </tr>
    <tr>
        <td>encrypt_card</td>
        <td>The number of the card but encrypt</td>
        <td>True</td>
    </tr>
    <tr>
        <td>type</td>
        <td>type name of the card. Ej: Mastercard</td>
        <td>True</td>
    </tr>
    <tr>
        <td>image</td>
        <td>Brand image of the type</td>
        <td>True</td>
    </tr>
    <tr>
        <td>Created_date</td>
        <td>Date of the created moment. Default of the actual date</td>
        <td></td>
    </tr>
</table>

<h3><b>Comments</b></h3>This collections contains all the data of the comments
<table>
    <tr>
        <th>Name</th>
        <th>Information</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>_id</td>
        <td>This field is created for default</td>
        <td>True</td>
    </tr>
    <tr>
        <td>user_id</td>
        <td>Is the ID of the user who is the owner of this comment. Has a ref with the model <b>User</b></td>
        <td>True</td>
    </tr>
    <tr>
        <td>message</td>
        <td>Content of the comment</td>
        <td>True</td>
    </tr>
    <tr>
        <td>product_id</td>
        <td>ID of the product which where the comment is created. Has a ref with the model <b>Product</b></td>
        <td>True</td>
    </tr>
    <tr>
        <td>score</td>
        <td>Score which the user gives</td>
        <td>True</td>
    </tr>
    <tr>
        <td>date</td>
        <td>Created date of the comment</td>
        <td>True</td>
    </tr>
    <tr>
        <td>name</td>
        <td>Users name</td>
        <td>True</td>
    </tr>
    <tr>
        <td>product_name</td>
        <td>Name of the product</td>
        <td>True</td>
    </tr>
</table>

<h3><b>Orders</b></h3>This collections contains all the data of the orders
<table>
    <tr>
        <th>Name</th>
        <th>Information</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>_id</td>
        <td>This field is created for default</td>
        <td>True</td>
    </tr>
    <tr>
        <td>id_client</td>
        <td>Is the ID of the user who is the owner of this order. Has a ref with the model <b>User</b></td>
        <td>True</td>
    </tr>
    <tr>
        <td>order_date</td>
        <td>Date of the moment which create the order</td>
        <td>True</td>
    </tr>
    <tr>
        <td>send_date</td>
        <td>Date of the moment which the order is sent</td>
        <td>True</td>
    </tr>
    <tr>
        <td>products</td>
        <td>Array of ItemCart (later)</td>
        <td>True</td>
    </tr>
    <tr>
        <td>delivery_address</td>
        <td>ID of the address which the user select. Ref with the <b>"Adresses"</b> model</td>
        <td>True</td>
    </tr>
    <tr>
        <td>billing</td>
        <td>ID of the card which the user select. Ref with the <b>"Billing"</b> model</td>
        <td>True</td>
    </tr>
    <tr>
        <td>state</td>
        <td>State of the order. <ul>
            <li>"F" -> Finished</li>
            <li>"P" -> In process</li>
        </ul></td>
        <td>True</td>
    </tr>
    <tr>
        <td>total</td>
        <td>Total of the order price</td>
        <td>True</td>
    </tr>
</table>

<h3><b>ItemCart</b></h3>Is a provisional array for save the products in the orders
<table>
    <tr>
        <th>Name</th>
        <th>Information</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>product_id</td>
        <td>ID of the product. Ref with the <b>Product</b> model</td>
        <td>False</td>
    </tr>
    <tr>
        <td>quantity</td>
        <td>Quantity of this product</td>
        <td>False</td>
    </tr>
    <tr>
        <td>price</td>
        <td>Initial price of the product</td>
        <td>False</td>
    </tr>
    <tr>
        <td>name</td>
        <td>Name of the product</td>
        <td>False</td>
    </tr>
    <tr>
        <td>image</td>
        <td>Image of the product</td>
        <td>False</td>
    </tr>
    <tr>
        <td>total_price</td>
        <td>Total price of this product. Depends of the price and quantity</td>
        <td>False</td>
    </tr>
</table>

<h3><b>Product</b></h3>This is the model of the products
<table>
    <tr>
        <th>Name</th>
        <th>Information</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>_id</td>
        <td>This field is created for default</td>
        <td>True</td>
    </tr>
    <tr>
        <td>name</td>
        <td>Name of the product</td>
        <td>True</td>
    </tr>
    <tr>
        <td>price</td>
        <td>Initial price of the product</td>
        <td>True</td>
    </tr>
    <tr>
        <td>description</td>
        <td>Long description of the product</td>
        <td>True</td>
    </tr>
    <tr>
        <td>short_description</td>
        <td>Short description of the product</td>
        <td>True</td>
    </tr>
    <tr>
        <td>upload_date</td>
        <td>Date which the user created this product</td>
        <td>True</td>
    </tr>
    <tr>
        <td>state</td>
        <td>This is the state of the product. 
            <ul>
                <li>New</li>
                <li>Old</li>
            </ul>
        </td>
        <td>True</td>
    </tr>
    <tr>
        <td>stock</td>
        <td>Number of the stock of this product</td>
        <td>True</td>
    </tr>
    <tr>
        <td>Categories</td>
        <td>It's a array of string about the categories thas includes the product</td>
        <td>True</td>
    </tr>
    <tr>
        <td>type</td>
        <td>Type of the product. This shop has 3 types:
            <ul>
                <li>Manga</li>
                <li>Light novel</li>
                <li>Merchandising</li>
            </ul>
        </td>
        <td>True</td>
    </tr>
    <tr>
        <td>image</td>
        <td>Save the image who used this product</td>
        <td>False</td>
    </tr>
    <tr>
        <td>number_sales</td>
        <td>Number of sales about this product</td>
        <td>True</td>
    </tr>
    <tr>
        <td>authors</td>
        <td>Name of the author about this product</td>
        <td>False</td>
    </tr>
    <tr>
        <td>editorial</td>
        <td>Name of the editorial about this product</td>
        <td>False</td>
    </tr>
    <tr>
        <td>series</td>
        <td>Name of the serie about this product</td>
        <td>False</td>
    </tr>
    <tr>
        <td>comments</td>
        <td>Array of ID's about the comments. Ref of <b>Comments</b> model</td>
        <td>False</td>
    </tr>
</table>

<h3><b>Roles</b></h3>This is the model of the roles. Automatically, the system created 4 roles:
    <ul>
        <li>Admin</li>
        <li>Owner</li>
        <li>Employee</li>
        <li>User</li>
    </ul>
<table>
    <tr>
        <th>Name</th>
        <th>Information</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>_id</td>
        <td>This field is created for default</td>
        <td>True</td>
    </tr>
    <tr>
        <td>name</td>
        <td>This field is the name of the role</td>
        <td>True</td>
    </tr>
</table>

<h3><b>Users</b></h3>This is the model of the user. Automatically, the system created 1 user with the role admin.
<table>
    <tr>
        <th>Name</th>
        <th>Information</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>_id</td>
        <td>This field is created for default</td>
        <td>True</td>
    </tr>
    <tr>
        <td>name</td>
        <td>This field is the name of the user</td>
        <td>False</td>
    </tr>
    <tr>
        <td>last_name</td>
        <td>This field is the last_name of the user</td>
        <td>False</td>
    </tr>
    <tr>
        <td>email</td>
        <td>This field is the email of the user. The email is unique.</td>
        <td>True</td>
    </tr>
    <tr>
        <td>password_hash</td>
        <td>This field is the encrypted password</td>
        <td>True</td>
    </tr>
    <tr>
        <td>register_date</td>
        <td>This field is the date when the user was registered</td>
        <td>True</td>
    </tr>
    <tr>
        <td>state</td>
        <td>This field is the state of the user. Default is Active
            <ul>
                <li>Active</li>
                <li>Disabled</li>
            </ul>
        </td>
        <td>True</td>
    </tr>
    <tr>
        <td>billing</td>
        <td>Array of ID's about the billing of the user. Ref with the <b>Billing</b> model</td>
        <td>True</td>
    </tr>
    <tr>
        <td>cart</td>
        <td>Array of ID's about the order of the user. Ref with the <b>Order</b> model</td>
        <td>True</td>
    </tr>
    <tr>
        <td>address</td>
        <td>Array of ID's about the address of the user. Ref with the <b>Address</b> model</td>
        <td>True</td>
    </tr>
    <tr>
        <td>role</td>
        <td>ID of the role. Ref with the <b>Role</b> model. Default "user"</td>
        <td>True</td>
    </tr>
    <tr>
        <td>comments</td>
        <td>Array of ID's about the comments. Ref with the <b>Comments</b> model</td>
        <td>True</td>
    </tr>
    <tr>
        <td>tokenRecover</td>
        <td>Filed where the system use for recover the password of the user</td>
        <td>False</td>
    </tr>
</table>

## Backend

## Frontend

## Steps

## Funcionalities

## Annex

## Bibliography