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
//insert new data 
router.post('/', (req, res) => {
    const carData =req.body;
    db('cars')
    .insert(carData)
    .then(newCarEntry =>  {
        res.status(201).json(newCarEntry);
    })
    .catch( error => {
        res.status(500).json(`FAILED to store data :` + error.message)
    })
})
/*
router.post('/', (req, res) => {
    const fruitData = req.body;
    db('fruits').insert(fruitData)
    .then(ids => {
      db('fruits').where({ id: ids[0] })
      .then(newFruitEntry => {
        res.status(201).json(newFruitEntry);
      });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
  });
*/

module.exports = router; 
