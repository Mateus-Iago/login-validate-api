const express = require('express')
const router = express.Router()

const auth = require('../controllers/authController')

router.get('/', auth, (req, res) => {

    if(req.user.admin){
        res.send('esse dado só deve ser visto pelo adm')
    }else{
        res.send('Not Admin: Acess Denied')
    }
    
})


module.exports = router