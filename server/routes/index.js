const express = require("express");
const router = express.Router();

router.get('/backend/test', (req,res)=>{
    res.send('we made it!!!!')
});
router.post('/user/interest', (req, res) => {
    console.log(req.body);
    console.log(`saving user ${req.body.name} with email ${req.body.email} and request ${req.body.message}`);
    db.users.create({
        name: req.body.firstname,
        email: req.body.email,
        message: req.body.message,
    })
});


module.exports = router;
