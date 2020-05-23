const express = require('express')
const db = require('../data/db-config')
const router = express()

// api endpoints

router.get('/', async (req, res) => {
    try {
        let result = await db('cars')
        res.status(200).json({ result: result })
    } catch (err) {
        res.status(500).json({ msg: 'something went wrong', error: err})
    }
})

router.get('/:vin', (req, res) => {
    console.log('getting...')
})

router.post('/', (req, res) => {
    console.log('getting...')
})

router.post('/:vin', (req, res) => {
    console.log('getting...')
})

router.delete('/:vin', (req, res) => {
    console.log('getting...')
})

// middleware


// export

module.exports = router