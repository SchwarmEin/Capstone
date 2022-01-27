//npm packages
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000;


// Routes - test-only
app.get('/test', (req, res)=>{
    const testdata = {
        username: 'Andrew',
        age: 30
    }
    res.json(testdata)
})

//Connect to server
app.listen(PORT, console.log(`Server is starting at ${PORT}`))