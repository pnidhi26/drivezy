
require('../app')
const express = require('express')

var ObjectId = require('mongodb').ObjectID;
const car = require('../models/cars')
const app = express()
app.use(express.json())
const port = process.env.port || 3000

app.post('/addcar', (req, res)=>{
    const Car = new car(req.body)
    Car.save().then(
        ()=>{
            res.send(Car)
        }
    ).catch((error)=>{
        res.send(error)
    }) 
})

app.get('/getcars', (req, res)=>{
    car.find((error, cars)=>
    {
        if (error){
            return res.send({'error': error})
        }
        return res.send(cars)
    })
})

app.patch('/updatecar/:id', (req, res)=>{
    const _id = req.params.id
    var CarBooked = false
    const Car =  car.findOne({_id: ObjectId(req.params.id)}, (error, car) => {
            if (car.bookingStatus.length>0){
                CarBooked = true
                return res.status(400).send('Car status is booked')
            }
        })
    if (CarBooked){
        return res.status(400).send('Car status is booked')
    }
    if (!CarBooked){
    query = {_id: _id}
    car.findOneAndUpdate(query, req.body, {upsert: true}, function(err, doc) {
        if (err) return res.send(400, {error: err});
        return res.send({status: 'Succesfully saved.'});
    })}
})

app.patch('/bookCar/:id', (req, res)=>{
    const _id = req.params.id
    var CarBooked = false
    const Car =  car.findOne({_id: ObjectId(req.params.id)}, (error, car) => {
            if (car.bookingStatus.length>0){
                CarBooked = true
                return res.status(400).send('Car status is booked')
            }
        })
    if (CarBooked){
        return res.status(400).send('Car status is booked')
    }
    if (!CarBooked){
    query = {_id: _id}
    car.findOneAndUpdate(query, req.body, {upsert: true}, function(err, doc) {
        if (err) return res.send(400, {error: err});
        return res.send({status: 'Succesfully saved.'});
    })}
})
app.listen(port, ()=>{
    console.log('server is up on port ', port)
})