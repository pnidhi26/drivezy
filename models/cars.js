const mongoose = require('mongoose')


const car = mongoose.model("car",
    {
    Modelname:{
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 30,
        required: true,
        
    },
    vehicleNumber: {
        type: String,
        trim: true,
        minlength:1,
        maxlength: 30,
        required: true,
    },
    seatingCapacity:{
        type: Number,
        min: 1,
        max: 15,
        required: true
    },
    rent: {
        type: Number,
        min: 50,
        max: 5000,
        required: true
    },
    bookingStatus: [{dateOut: Date, dateReturn:Date}] 

}
)

module.exports = car