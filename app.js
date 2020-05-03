const mongoose = require('mongoose')

// const express = require('express')


// const app = express()
// const port = process.env.port || 3000

// app.use(express.json())
mongoose.connect ('mongodb://127.0.0.1:27017/car-rental-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// app.listen(port, ()=>{
//     console.log('server is up on port ', port)
// })
// module.exports = app