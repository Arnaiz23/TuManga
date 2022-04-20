<h1 align="center"><img src="../layout/assets/images/BrandTransparentMD.png" alt="arnaizDev brand" /> TuManga</h1>

# **Collections**

## **Roles**

- Admin
- Owner
- Employee
- User

## **Products**

- _id (Default)
- Name (String, !unique, required)
- Price (Number, !unique, required)
- Description (String, !unique, required)
- Sort_description (String, !unique, required)
- Upload_date (Date, !unique, default now)
- State (String, !unique, required) {new, old}
- Stock (Number, !unique, required)
- Categories (Array, required, !unique)
- Type (String, required, !unique) {light novel, manga or merchandising}
- Image (String, Qunique, required)
- Nº Sales (Number, !unique, required, default=0)
- Authors (String, !unique, !required)
- Editorial (String, !unique, !required)
- Series (String, !unique, !default) {Tokyo Revengers or SAO}
- Comments (Array ref "Comments_id", required, !unique)

## **Users**

- _id (Default)
- Name (String, !unique, !required)
- Last_name (String, !unique, !required)
- Email (String, unique, required)
    * Save in lowercase
- Password_hash (String, !unique, required)
- Register_date (Date, !unique, required, default now)
- State (String, !unique, required, default=Active) {Active o Disabled}
- Billing (Ref "Billing", !unique, required)
- Cart (Ref "Orders", !unique, required)
- Address (Ref "Address", !unique, required)
- Role (Ref "Roles", !unique, required, default=user)

## **Orders**

- _id (Default)
- id_client (Ref "Users_id", required, !unique)
- Name_client (String, required, !unique)
- Order_date (Date, !unique, required, default now)
- Send_date (Date, !unique, required)
- Orders (Ref "Product_id", !unique, required)
- Delivery_address (Ref "Address", required, !unique)
- Billing (ref "Billing_id", !unique, required)
- State (String, !unique, required) 
    - F -> Finalized (Pay)
    - P -> In proccess (In the cart)
- Telephone (Number, !unique, required)

## **Billing**

- _id (Default)
- Users_id (Ref "Users_id", required, !unique)
- Card_name (String, required, !unique)
- Expiration_date (Date, required, !unique)
- Last_4_digits (String, required, !unique)
- number_encrypt_card (String, required, !unique)

## **Address**

- _id (Default)
- user_id (Ref "Users_id", required, !unique)
- name (String, !unique, required)
- Number (number, !required, !unique)
- Floor (number, !required, !unique)
- name_person (String, required, !unique)
- Location (String, required, !unique)