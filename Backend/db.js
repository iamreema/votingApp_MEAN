const mongoose = require('mongoose');
if (mongoose.connect('mongodb://localhost:27017/OVS', {useNewUrlParser: true}))
    console.log('Connection Done')

module.exports = mongoose


