const express = require('express')
const router = express.Router()
const { getRandomString, validate } = require('../util/index')
const { storeContact } = require('../controllers/db')

router.post('/store_contact', async (req, res) => {
    try {
        const {name, email, phone, message} = req.body
        const randomString = await getRandomString(8);

        let errArr = validate(name, email, phone, message);        
        if(errArr.length > 0) {
            let errString = errArr.join(",")
            let errStringEncoded = Buffer.from(errString).toString('base64');
            res.redirect(`/contact.html?error=${errStringEncoded}`)
            return;
        }

        const data = {
            id: randomString,
            name,
            email,
            phone,
            message
        }
    
        await storeContact(data)
        res.redirect('/index.html?css=true')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router