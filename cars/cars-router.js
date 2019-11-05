const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(car => { 
        res.json(car);
    })
    .catch(error => { 
        res.status(500).json({
            message: 'failed to retrieve cars' + error.message
        });
    });
});

/*

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
    .where({id})
    .first()
    .then(car => { 
        res.json(car);
    })
    .catch(error => { 
        res.status(500).json(error.message);
    });
});
*/

module.exports = router; 
