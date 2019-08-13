const mongoose = require('mongoose');

var Candidate = mongoose.model('Candidate',{
    name: { type: String },
    party: { type: String }
});

module.exports = { Candidate };