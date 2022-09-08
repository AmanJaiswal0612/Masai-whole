const express = require('express')

const router = express.Router()

//get the db
const Url = require('../models/urlModel')



//write get reuedt for that url
router.get('/:code', async (req, res) => {
    try {
        //finding the url with thier urlcode
        const url = await Url.findOne({
            urlCode: req.params.code
        })
        if (url) {

           //if present check for expiry time in db

            let d1= url.createdAt;
            let d2= new Date();
            let diff= d2.getTime()-d1.getTime()
            console.log(diff)
            
            if(diff>600000){
                return res.status(401).send("link does not exist")
            }else{
                return res.redirect(url.longUrl)
            }
            
        } else {
            // else return a not found 404 status
            return res.status(404).json('No URL Found')
        }

    }
    // exception handler
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})


module.exports = router