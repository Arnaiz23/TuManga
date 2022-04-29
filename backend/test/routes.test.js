const supertest = require('supertest')

const mongoose = require('mongoose')
const { app } = require('../index')

const api = supertest(app)

const tokens = {
    "admin": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTJlMzE5MGJhZDYxODYxZGYwMCIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicmVnaXN0ZXJfZGF0ZSI6IjIwMjItMDQtMjZUMTI6MTA6MjIuMjM2WiIsImlhdCI6MTY1MTA5MzMxNywiZXhwIjoxNjUxMTc5NzE3fQ.VxB5rxwKt9IvRtTqtfsRlrNEups-zzJOWzFDbEeRtrU",
    "owner": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTdmZjczMDE0MjgzZjkwNmQyOCIsImVtYWlsIjoib3duZXJAZ21haWwuY29tIiwicmVnaXN0ZXJfZGF0ZSI6IjIwMjItMDQtMjZUMTI6MTE6NDMuNzE4WiIsImlhdCI6MTY1MTA5MzI4NiwiZXhwIjoxNjUxMTc5Njg2fQ.nKM3RfvsCZxwKPqrXyEb8Gt7qRqLCOZUFvPsgssH3iQ",
    "employee": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTg4ZjczMDE0MjgzZjkwNmQyYyIsImVtYWlsIjoiZW1wbGVhZG9AZ21haWwuY29tIiwicmVnaXN0ZXJfZGF0ZSI6IjIwMjItMDQtMjZUMTI6MTE6NTIuMjc3WiIsImlhdCI6MTY1MTA5MzI2OSwiZXhwIjoxNjUxMTc5NjY5fQ.1Zbnh9Ik4QQHHnewAab0Ug31ZYXm5rzcwwWUaKxQrfQ",
    "user": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTc3ZjczMDE0MjgzZjkwNmQyNCIsImVtYWlsIjoidXN1YXJpb0BnbWFpbC5jb20iLCJyZWdpc3Rlcl9kYXRlIjoiMjAyMi0wNC0yNlQxMjoxMTozNS42ODdaIiwiaWF0IjoxNjUxMDkzMjk3LCJleHAiOjE2NTExNzk2OTd9.WYE2H_tT7-aPWU10YWKGnO1MWbqYVU1tGr42oM1XkK8",
    "invalid": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTJlMzE5MGJhZDYxODY0NWYwMSIsImVtYWlsIjoiZXVzdGFxaW9AZ21haWwuY29tIiwicmVnaXN0ZXJfZGF0ZSI6IjIwMjItMDQtMjZUMTI6MTA6MjIuMjM2KzAwOjAwIn0.eO6aysIeaeobIsNFJ5Sgj0JwzLG0tfmY1T4clFK87B4",
    "prueba": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmJjM2Q5OWIyYzVkMmMxOTI1NTZiMSIsImVtYWlsIjoicHJ1ZWJhQGdtYWlsLmNvbSIsInJlZ2lzdGVyX2RhdGUiOiIyMDIyLTA0LTI5VDEwOjU0OjE3LjM0NFoiLCJpYXQiOjE2NTEyMzAwMjIsImV4cCI6MTY1MTMxNjQyMn0.0LsGi-MjtOYcsWICGRROs6FbKoMvLw43boVJrkpsxfE"
}

const url = "/api/v1"

// * ---------------------------- USERS ---------------------------------

// ! Is correct

/* describe('POST /user (Register)', () => {

    it("create a new user (email, password, confirm_password)(if this user doesn't exists)", async () => {
        const newUser = {
            "email": "prueba@gmail.com",
            "password": "123456",
            "confirm_password": "123456"
        }

        await api
            .post(url + "/user")
            .send(newUser)
            .expect(201)
            .expect('Content-type', /application\/json/)
    })

    it('create a new user (email, password)', async () => {
        const newUser = {
            "email": "prueba2@gmail.com",
            "password": "123456"
        }

        await api
            .post(url + "/user")
            .send(newUser)
            .expect(404)
            .expect('Content-type', /application\/json/)
    })

    it('create a new user (email)', async () => {
        const newUser = {
            "email": "prueba2@gmail.com"
        }

        await api
            .post(url + "/user")
            .send(newUser)
            .expect(404)
            .expect('Content-type', /application\/json/)
    })
}) */

describe('GET /user (Get one user with token)', () => {

    it('get one user without token', async () => {

        await api
            .get(url + '/user')
            .expect(500)

    })

    it('get one user with token', async () => {

        await api
            .get(url + '/user')
            .expect(200)
            .set({ Authorization: `Bearer ${tokens.user}` })

    })

    /* ! ERROR
        it('get one user with token invalid', async () => {

        await api
            .get(url+'/user')
            .expect(500)
            .set({Authorization: `Bearer ${tokens.invalid}`})
        
    }) */

})

// ! Is correct 

/* describe('PATCH /user (Change user state)', () => {

    it('change state without token', async () => {

        await api
            .patch(url + "/user")
            .expect(500)

    })

    it('change state with token', async () => {

        await api
            .patch(url + "/user")
            .expect(200)
            .set({ Authorization: `Bearer ${tokens.user}` })

    })

})

describe('POST /login', () => {

    it('login with email, password and remember', async () => {

        let data = {
            "email": "prueba@gmail.com",
            "password": "123456",
            "remember": true
        }

        await api
            .post(url + "/login")
            .send(data)
            .expect(200)

    })

    it('login with email, password', async () => {

        let data = {
            "email": "prueba@gmail.com",
            "password": "123456"
        }

        await api
            .post(url + "/login")
            .send(data)
            .expect(200)

    })

    it('login with email incorrect', async () => {

        let data = {
            "email": "error@gmail.com",
            "password": "123456",
            "remember": true
        }

        await api
            .post(url + "/login")
            .send(data)
            .expect(404)

    })

    it('login with password incorrect', async () => {

        let data = {
            "email": "empleado@gmail.com",
            "password": "341232",
            "remember": true
        }

        await api
            .post(url + "/login")
            .send(data)
            .expect(404)

    })

})

describe("PUT /user (update the user)", () => {

    it('update the user with token', async () => {

        let data = {
            "name": "PruebaUpdate",
            "last_name": "PruebaUpdate"
        }

        await api
            .put(url+"/user")
            .send(data)
            .expect(200)
            .set({ Authorization: `Bearer ${tokens.prueba}` })

    })

    it('update the user without token', async () => {

        let data = {
            "name": "PruebaUpdate",
            "last_name": "PruebaUpdate"
        }

        await api
            .put(url+"/user")
            .send(data)
            .expect(500)

    })

    it('update the user with password and confirm', async () => {

        let data = {
            "password": "234567",
            "confirm_password": "234567"
        }

        await api
            .put(url+"/user")
            .send(data)
            .expect(200)
            .set({ Authorization: `Bearer ${tokens.prueba}` })

    })

    it('update the user with password and confirm same', async () => {

        let data = {
            "password": "234567",
            "confirm_password": "234567"
        }

        await api
            .put(url+"/user")
            .send(data)
            .expect(404)
            .set({ Authorization: `Bearer ${tokens.prueba}` })

    })

    it('update the user with password and confirm not match', async () => {

        let data = {
            "password": "234567",
            "confirm_password": "234568"
        }

        await api
            .put(url+"/user")
            .send(data)
            .expect(404)
            .set({ Authorization: `Bearer ${tokens.prueba}` })

    })

    it('update the user with password', async () => {

        let data = {
            "password": "999999999"
        }

        await api
            .put(url+"/user")
            .send(data)
            .expect(200)
            .set({ Authorization: `Bearer ${tokens.prueba}` })

    })

})

describe('DELETE /user', () => {

    it('delete user with token', async () => {

        await api
            .delete(url+"/user")
            .set({Authorization: `Bearer ${tokens.prueba}`})
            .expect(200)
        
    })

    it('delete user without token', async () => {

        await api
            .delete(url+"/user")
            .set({Authorization: `Bearer ${tokens.prueba}`})
            .expect(500)
        
    })
    
}) */

// * -----------------------------------------------------------------------

// * ---------------------------- PRODUCTS ---------------------------------

describe('GET /products/new', () => {

    it('get new products', async () => {

        await api
            .get(url + "/products/new")
            .expect(200)
    })

})

describe('GET /products/manga/:limit&:skip', () => {

    it('get mangas limit -> 8 skip -> 0', async () => {

        await api
            .get(url + "/products/manga/8&0")
            .expect(200)

    })

    it('get mangas limit -> 8 skip -> 5, (if the products.length > 5)', async () => {

        await api
            .get(url + "/products/manga/8&5")
            .expect(404)

    })

})

describe('GET /products/merchandising/:limit&:skip', () => {

    it('get merchandisings limit -> 8 skip -> 0', async () => {

        await api
            .get(url + "/products/merchandising/8&0")
            .expect(200)

    })

    it('get merchandisings limit -> 8 skip -> 5, (if the products.length > 5)', async () => {

        await api
            .get(url + "/products/merchandising/8&5")
            .expect(404)

    })

})

describe('GET /products (Get all products)', () => {

    it('get all the products (without token)', async () => {

        await api
            .get(url + '/products')
            .expect(500)

    })

    it('get all the products (with token User)', async () => {

        await api
            .get(url + '/products')
            .expect(403)
            .set({ Authorization: `Bearer: ${tokens.user}` })

    })

    it('get all the products (with token superior User)', async () => {

        await api
            .get(url + '/products')
            .expect(200)
            .set({ Authorization: `Bearer: ${tokens.employee}` })

    })

})

describe('GET /product/:id (Get one product)', () => {

    it('get one product with id valid', async () => {

        await api
            .get(url + '/product/6267e96e3224c282caecafa0')
            .expect(200)

    })

    it('get one product with id invalid', async () => {

        await api
            .get(url + '/product/6267e96e3224c282caecafa6')
            .expect(404)

    })

    it('get one product without id', async () => {

        await api
            .get(url + '/product')
            .expect(404)

    })

})

// * -----------------------------------------------------------------------

// * ---------------------------- ORDERS ---------------------------------

describe('GET /order/process', () => {

    it('get the order in process with token', async () => {

        await api
            .get(url + "/order/process")
            .set({ Authorization: `Bearer ${tokens.user}` })
            .expect(200)

    })

    it('get the order in process with token not cart', async () => {

        await api
            .get(url + "/order/process")
            .set({ Authorization: `Bearer ${tokens.prueba}` })
            .expect(200)

    })

    it('get the order in process without token', async () => {

        await api
            .get(url + "/order/process")
            .expect(500)

    })

})

describe('POST /order', () => {

    let data = {
        "id_product": "6267e96e3224c282caecafa0"
    }

    it('create new order with token and cart', async () => {

        await api
            .post(url + "/order")
            .send(data)
            .set({ Authorization: `Bearer ${tokens.user}` })
            .expect(404)

    })

    it('create new order with token', async () => {

        await api
            .post(url + "/order")
            .send(data)
            .set({ Authorization: `Bearer ${tokens.prueba}` })
            .expect(201)

    })

    it('create new order with token id_product false', async () => {

        data.id_product = "6267e96e3224c282caecafa4"

        await api
            .post(url + "/order")
            .send(data)
            .set({ Authorization: `Bearer ${tokens.prueba}` })
            .expect(201)

    })

    it('create new order without token', async () => {

        await api
            .post(url + "/order")
            .send(data)
            .expect(500)

    })

})

// * -----------------------------------------------------------------