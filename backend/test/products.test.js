const supertest = require('supertest')

const mongoose = require('mongoose')
const { app } = require('../index')

const api = supertest(app)

describe('products', () => {

    it('get new products', async () => {

        await api
            .get("/api/v1/products/new")
            .expect(200)
    })
    
})