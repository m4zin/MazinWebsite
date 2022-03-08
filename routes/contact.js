const express = require('express')
const router = express.Router()
const { getRandomString } = require('../util/index')
const { storeContact } = require('../controllers/db')

router.post('/store_contact', async (req, res) => {
    try {
        const {name, email, phone, message} = req.body
        const randomString = await getRandomString(8);
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