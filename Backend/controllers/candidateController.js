const express = require('express');
var router = express.Router();
var { Candidate } = require('../models/candidate');
var ObjectId = require('mongoose').Types.ObjectId;

// Get all candidates => localhost:3000/candidates
router.get('/candidates', (req,res) => {
    Candidate.find((err,docs) => {
        if (!err) { res.send(docs); }
        else ( res.send('Data not found') )
    });
});

// Add candidates details 
router.post('/candidates',(req,res) => {
    var can = new Candidate({
        name: req.body.name,
        party: req.body.party
    });
    can.save((err, doc)=>{
        if(!err) {res.send(doc);}
        else(res.send('Data insertion failed'))
    });
});

// Get candidates by id
router.get('/candidates/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.send('not a valid ID');

    Candidate.findById(req.params.id,(err,doc) => {
        if(!err) {res.send(doc);}
        else {res.send('no record found')}
    });
});

// Update candidates details by id
router.put('/candidates/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.send('not a valid ID found to update')

    var can = {
        name: req.body.name,
        party: req.body.party
    };

    Candidate.findByIdAndUpdate(req.params.id, {$set: can}, {new: true}, (err,doc)=>{
        if(!err) {res.send(doc);}
        else {res.send('Data updation failed')}
    });
});

// Delete candidate data by id
router.delete('/candidates/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.send('id not found to delete');

    Candidate.findByIdAndRemove(req.params.id, (err,doc) => {
        if(!err) {res.send(doc);}
        else {res.send('data deleted');}
    });
});

module.exports = router;