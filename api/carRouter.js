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

router.get('/:VIN', vinValidate, (req, res) => {
    try {
        res.status(200).json({ result: req.car })
    } catch (err) {
        res.status(500).json({ msg: 'something went wrong', error: err})
    }
})

router.post('/', async (req, res) => {
    try {
        let result = await db('cars').insert(req.body)
        res.status(200).json({ result: result })
    } catch (err) {
        res.status(500).json({ msg: 'something went wrong', error: err})
    }
})

router.put('/:VIN', vinValidate, async (req, res) => {
    const { VIN } = req.car
    try {
        let result = await db('cars').where({ VIN }).update(req.body)
        res.status(200).json({ result: result })
    } catch (err) {
        console.log(err)

        res.status(500).json({ msg: 'something went wrong', error: err})
    }
})

router.delete('/:VIN', vinValidate, async (req, res) => {
    const { VIN } = req.car

    try {
        let result = await db('cars').where({ VIN }).del()
        res.status(200).json({ result: result })
    } catch (err) {
        res.status(500).json({ msg: 'something went wrong', error: err})
    }
})

// middleware

async function vinValidate(req, res, next) {
    const { VIN } = req.params
    req.car = await db('cars').where({ VIN }).first()
    if (req.car === undefined || req.car === false) {
        res.status(500).json({ msg: 'please enter a valid vin number'})
    } else {
        next()
    }
}

// export

module.exports = router