const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'get users ok',
        metadata: [
            {
                name: 'nguyenanh',
                age: 20
            }
        ]
    })
})

module.exports = router;