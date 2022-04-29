const supertest = require('supertest')

const mongoose = require('mongoose')
const { app } = require('../index')

const api = supertest(app)

const tokens = {
    "admin" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTJlMzE5MGJhZDYxODYxZGYwMCIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicmVnaXN0ZXJfZGF0ZSI6IjIwMjItMDQtMjZUMTI6MTA6MjIuMjM2WiIsImlhdCI6MTY1MTA5MzMxNywiZXhwIjoxNjUxMTc5NzE3fQ.VxB5rxwKt9IvRtTqtfsRlrNEups-zzJOWzFDbEeRtrU",
    "owner" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTdmZjczMDE0MjgzZjkwNmQyOCIsImVtYWlsIjoib3duZXJAZ21haWwuY29tIiwicmVnaXN0ZXJfZGF0ZSI6IjIwMjItMDQtMjZUMTI6MTE6NDMuNzE4WiIsImlhdCI6MTY1MTA5MzI4NiwiZXhwIjoxNjUxMTc5Njg2fQ.nKM3RfvsCZxwKPqrXyEb8Gt7qRqLCOZUFvPsgssH3iQ",
    "employee" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTg4ZjczMDE0MjgzZjkwNmQyYyIsImVtYWlsIjoiZW1wbGVhZG9AZ21haWwuY29tIiwicmVnaXN0ZXJfZGF0ZSI6IjIwMjItMDQtMjZUMTI6MTE6NTIuMjc3WiIsImlhdCI6MTY1MTA5MzI2OSwiZXhwIjoxNjUxMTc5NjY5fQ.1Zbnh9Ik4QQHHnewAab0Ug31ZYXm5rzcwwWUaKxQrfQ",
    "user" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdlMTc3ZjczMDE0MjgzZjkwNmQyNCIsImVtYWlsIjoidXN1YXJpb0BnbWFpbC5jb20iLCJyZWdpc3Rlcl9kYXRlIjoiMjAyMi0wNC0yNlQxMjoxMTozNS42ODdaIiwiaWF0IjoxNjUxMDkzMjk3LCJleHAiOjE2NTExNzk2OTd9.WYE2H_tT7-aPWU10YWKGnO1MWbqYVU1tGr42oM1XkK8"
}

describe('users', () => {
    it('users is returned as json', async () => {
        await api
            .get("/api/v1/admin/users")
            .expect(200)
            .expect('Content-type', /application\/json/)
            .set({ Authorization: `Bearer ${tokens.employee}` })
    })
    
    it('create a new user (Register)', async () => {
        const newUser = {
            "email" : "prueba2@gmail.com",
            "password" : "123456",
            "confirm_password" : "123456"
        }
    
        await api
            .post("/api/v1/user")
            .send(newUser)
            .expect(201)
            .expect('Content-type', /application\/json/)
    })
})