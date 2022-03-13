const express = require('express')
const router = express.Router()
const { getRandomString, validate } = require('../util/index')
const { storeContact } = require('../controllers/db')

router.post('/store_contact', async (req, res) => {
    try {
        const {name, email, tel} = req.body
        const randomString = await getRandomString(8);

        let errArr = validate(name, email, tel);
        if(errArr.length > 0) {
            let errString = errArr.join(",")
            console.log(errString)
            req.flash('error_msg', errString)
            res.redirect('/contact')
            return;
        }

        const data = {
            id: randomString,
            name,
            email,
            tel,
        }
    
        await storeContact(data)
        req.flash('success_msg', 'Contact added successfully')
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router