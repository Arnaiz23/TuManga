const supertest = require('supertest')

const mongoose = require('mongoose')
const { app } = require('../index')

const api = supertest(app)

const tokens = {
    "admin": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTJlMzE5MGJhZDYxODYxZGYwMCIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicmVnaXN0ZXJfZGF0ZSI6IjIwMjItMDQtMjZUMTI6MTA6MjIuMjM2WiIsImlhdCI6MTY1MTA5MzMxNywiZXhwIjoxNjUxMTc5NzE3fQ.VxB5rxwKt9IvRtTqtfsRlrNEups-zzJOWzFDbEeRtrU",
    "owner": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTdmZjczMDE0MjgzZjkwNmQyOCIsImVtYWlsIjoib3duZXJAZ21haWwuY29tIiwicmVnaXN0ZXJfZGF0ZSI6IjIwMjItMDQtMjZUMTI6MTE6NDMuNzE4WiIsImlhdCI6MTY1MTA5MzI4NiwiZXhwIjoxNjUxMTc5Njg2fQ.nKM3RfvsCZxwKPqrXyEb8Gt7qRqLCOZUFvPsgssH3iQ",
    "employee": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTg4ZjczMDE0MjgzZjkwNmQyYyIsImVtYWlsIjoiZW1wbGVhZG9AZ21haWwuY29tIiwicmVnaXN0ZXJfZGF0ZSI6IjIwMjItMDQtMjZUMTI6MTE6NTIuMjc3WiIsImlhdCI6MTY1MTA5MzI2OSwiZXhwIjoxNjUxMTc5NjY5fQ.1Zbnh9Ik4QQHHnewAab0Ug31ZYXm5rzcwwWUaKxQrfQ",
    "user": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTc3ZjczMDE0MjgzZjkwNmQyNCIsImVtYWlsIjoidXN1YXJpb0BnbWFpbC5jb20iLCJyZWdpc3Rlcl9kYXRlIjoiMjAyMi0wNC0yNlQxMjoxMTozNS42ODdaIiwiaWF0IjoxNjUxMDkzMjk3LCJleHAiOjE2NTExNzk2OTd9.WYE2H_tT7-aPWU10YWKGnO1MWbqYVU1tGr42oM1XkK8",
    "invalid" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTJlMzE5MGJhZDYxODY0NWYwMSIsImVtYWlsIjoiZXVzdGFxaW9AZ21haWwuY29tIiwicmVnaXN0ZXJfZGF0ZSI6IiJ9.XYq-qDi_-9Qm3QTc2wY-4eD_E7JzFmU11_A1Tn-83s4"
}

const url = "/api/v1"

// * ---------------------------- USERS ---------------------------------

describe('POST /user (Register)', () => {

    it("create a new user (email, password, confirm_password)(if this user doesn't exists)", async () => {
        const newUser = {
            "email": "prueba3@gmail.com",
            "password": "123456",
            "confirm_password": "123456"
        }

        await api
            .post(url+"/user")
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
            .post(url+"/user")
            .send(newUser)
            .expect(201)
            .expect('Content-type', /application\/json/)
    })

    it('create a new user (email)', async () => {
        const newUser = {
            "email": "prueba2@gmail.com"
        }

        await api
            .post(url+"/user")
            .send(newUser)
            .expect(201)
            .expect('Content-type', /application\/json/)
    })
})

describe('GET /user (Get one user with token)', () => {

    it('get one user without token', async () => {

        await api
            .get(url+'/user')
            .expect(500)
        
    })

    it('get one user with token', async () => {

        await api
            .get(url+'/user')
            .expect(200)
            .set({Authorization: `Bearer ${tokens.user}`})
        
    })

    /* it('get one user with token invalid', async () => {

        await api
            .get(url+'/user')
            .expect(500)
            .set({Authorization: `Bearer ${tokens.invalid}`})
        
    }) */
    
})

describe('PATCH /user (Change user state)', () => {

    it('change state without token', async () => {

        await api
            .patch("/user")
            .expect(404)
        
    })

    it('change state with token', async () => {

        await api
            .patch("/user")
            .expect(200)
            .set({Authorization: `Bearer ${tokens.user}`})
        
    })

    it('change state with token invalid', async () => {

        await api
            .patch("/user")
            .expect(404)
            .set({Authorization: `Bearer ${tokens.invalid}`})
        
    })
    
})

// * -----------------------------------------------------------------------

// * ---------------------------- PRODUCTS ---------------------------------

describe('GET /products/new', () => {

    it('get new products', async () => {

        await api
            .get(url+"/products/new")
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