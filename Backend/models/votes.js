const mongoose = require('mongoose')

var Votes = mongoose.model('Votes',{
    party : {type: String}
});

module.exports = { Votes };
