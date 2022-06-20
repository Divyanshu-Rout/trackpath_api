const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    timeStamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number,
    }
})

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
});

//we dont need the pointSchema collection at mongoose instead we have embeded pointSchema in track schema

mongoose.model('Track', trackSchema);