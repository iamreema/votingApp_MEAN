const express = require('express');
var router = express.Router();
var { Votes } = require('../models/votes');
var { Candidate } = require('../models/candidate');

// var ObjectId = require('mongoose').Types.ObjectId;

// Get all candidates => localhost:3000/vote-for
router.get('/vote-for',(req,res) => {
    Votes.find((err,docs) => {
        if(!err) { res.send(docs) }
        else { res.send('No parties found to Vote') }
    });
});

//Save vote
router.post('/vote-for',(req,res) => {
    console.log(req.body.party)
    var can = new Votes({
        party: req.body.party
    });
    can.save((err, doc)=>{
        if(!err) {res.send(doc);}
        else(res.send('Data insertion failed'))
    });
});

//Voting Result
router.get('/voting-result',(req,res)  => {
    var results = [];
    // var abc = {}
    Candidate.find((err,docs) => {
        if(!err) {
            docs.forEach(function(key) {
                Votes.countDocuments({party: key.party}, function(err, count){
                    // console.log('Count is ' + count);
                    // console.log(key.party)
                    // results.partyName = key.party,
                    // results.partyCount = count
                    results.push(key.party,count);
                })
            });
            setTimeout(() => {
                var voteResultData = results
                res.json(voteResultData)
                // console.log(res.send(voteResultData))         
            }, 5000); 
        } else { 
         res.send('No parties found to Vote')
        }
    });
    
})




module.exports = router;