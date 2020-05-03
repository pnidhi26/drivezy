const mongoose = require('mongoose')
const validator = require('validator')
const car = require('./cars')


const rental = new mongoose.Schema({
    user: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                trim: true,
                minlength: 1,
                maxlength: 30
            },

            email: {
                type: String,
                required: true,
                trim: true,
                validate(value){
                    if (!validator.isEmail(value)){
                        throw new Error ('Email is invalid')
                    }
                }
            },

            phone: {
                type: String,
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 15,
                validate(value){
                    if (!validator.isMobilePhone(value)){
                        throw new Error ('Mobile no invalid')
                    }
                }
            }

        },
    )
    },
    carId: {
        type: String,
        require: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
      },
    dateReturned: {
        type: Date
      },
})