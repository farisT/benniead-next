const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.get('/backend/test', (req,res)=>{
    res.send('we made it!!!!')
});
router.post('/user/interest', (req, res) => {
    console.log(req);
    res.send('saved you!!!!!!!');
    // db.users.findAll({
    //         where: {
    //             email: req.body.email
    //         }
    //     })
});


module.exports = router;
