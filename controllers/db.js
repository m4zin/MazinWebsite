const Keyv = require('keyv')
const path = require('path')
const { KeyvFile } = require('keyv-file')

const DB = new Keyv({
    store: new KeyvFile({
      filename: path.join(__dirname, '../db/contacts.json'),
      encode: JSON.stringify, // serialize function
      decode: JSON.parse // deserialize function
    })
})

async function storeContact(data) {
    await DB.set(data.id, data)
}

module.exports = {
    storeContact
}