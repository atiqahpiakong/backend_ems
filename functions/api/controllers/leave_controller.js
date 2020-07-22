

const leaveModel = require('../models/leave_model')
const express = require('express')
const router = express.Router()

// Get all quote
router.get('/', async (req, res, next) => {
    try {
        const result = await leaveModel.get()
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Get one quote
router.get('/:id', async (req, res, next) => {
    try {
        const result = await leaveModel.getById(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

router.get('/:id/myleave', async (req, res, next) => {
    try {
        const result = await leaveModel.getByUID(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})


// Update a increment like +1
// router.patch('/:id/like', async (req, res, next) => {
//     try {
        
//         const id = req.params.id
//         const data = req.body

        
        
//         const doc = await leaveModel.getById(id)
//         if (!doc) return res.sendStatus(404)

//         doc['like'] +=1;

//         // Merge existing fields with the ones to be updated
//         Object.keys(data).forEach((key) => doc[key] = data[key])
        

//         const updateResult = await leaveModel.update(id, doc)
//         if (!updateResult) return res.sendStatus(404)

//         return res.json(doc)
//     }
//     catch (e) {
//         return next(e)
//     }
// })

// Update a increment dislike +1
// router.patch('/:id/dislike', async (req, res, next) => {
//     try {
        
//         const id = req.params.id
//         const data = req.body

        

//         const doc = await leaveModel.getById(id)
//         if (!doc) return res.sendStatus(404)

//         doc['dislike'] +=1;
        
//         // Merge existing fields with the ones to be updated
//         Object.keys(data).forEach((key) => doc[key] = data[key])
        

//         const updateResult = await leaveModel.update(id, doc)
//         if (!updateResult) return res.sendStatus(404)

//         return res.json(doc)
//     }
//     catch (e) {
//         return next(e)
//     }
// })

// Create a new quote
router.post('/', async (req, res, next) => {
    try {
        const result = await leaveModel.create(req.body)
        if (!result) return res.sendStatus(409)
        return res.status(201).json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Delete a quote
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await leaveModel.delete(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.sendStatus(200)
    }
    catch (e) {
        return next(e)
    }
})

// Update a quote
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const doc = await leaveModel.getById(id)
        if (!doc) return res.sendStatus(404)

        // Merge existing fields with the ones to be updated
        Object.keys(data).forEach((key) => doc[key] = data[key])

        const updateResult = await leaveModel.update(id, doc)
        if (!updateResult) return res.sendStatus(404)

        return res.json(doc)
    }
    catch (e) {
        return next(e)
    }
})


// Replace a quote
router.put('/:id', async (req, res, next) => {
    try {
        const updateResult = await leaveModel.update(req.params.id, req.body)
        if (!updateResult) return res.sendStatus(404)

        const result = await leaveModel.getById(req.params.id)
        return res.json(result)

    }
    catch (e) {
        return next(e)
    }
})

module.exports = router