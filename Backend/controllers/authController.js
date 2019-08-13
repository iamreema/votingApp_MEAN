var express = require('express');
var router = express.Router();
var User = express('../Models/user');

router.post('/register',(req,res) => {
    var formData = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        is_admin: true
    });
    res.send('formData')
    User.find({email: req.body.email}).countDocuments((err,count) => {
        if (!err) {
            if (count > 0) {
                return res.json({success:false, message:'Email already exists'})
            } else {
                formData.save((err, doc) => {
                    if(!err)
                        return res.status(200).json({success: true,message:'Registered Successfully'})
                    else 
                        return res.status(500).json({success:false,message:'registration failed'})
                })
            }
        } else {
            return res.json({success:false, message:'Something went wrong'})
        }
    })
});


module.exports = router;