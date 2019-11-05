const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

//READ data
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


//READ Data by Id
router.get('/:id', async (req, res) => { 
    try { 
        const result = await db('cars')
        .where({id: req.params.id});
        res.status(200).json(result[0]);
    }
    catch (error) { 
    res.status(500).json({ message: 'this went wrong: ' + error.message });
    }
});

//Read data by id method 2 
// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     db('cars')
//     .where({id})
//     .first()
//     .then(car => { 
//         res.json(car);
//     })
//     .catch(error => { 
//         res.status(500).json(error.message);
//     });
// });

//CREATE Data 
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

router.put('/:id', async (req, res) => {
  const upCar = req.body;
  db('cars')
  .where({ id: req.params.id })
  .update(upCar)
  .then(updatedCarInfo => {
    res.json(updatedCarInfo + ' records got changed!' );
  })
  .catch(error => {
    res.status(500).json({ message: 'this went wrong: ' + error.message });
  });
})

router.delete('/:id', async (req, res) => {

  db('cars')
  .where( {
      id: req.params.id
  })
  .del()
  .then(deletedCar => {
      res.json(deletedCar + 'row got deleled!');
  })
  .catch(error => 
    {
    res.status(500).json('this went wrong: ' + error.message)
    })
})
module.exports = router; 
