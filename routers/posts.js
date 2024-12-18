const express = require('express');
const router = express.Router();

//index
router.get('/', (req,res) =>{
  res.send ('Lista dei cibi')
})

//show
router.get('/:id', (req,res) =>{
  res.send (`Dettagli del cibo con id ${req.params.id}`)
})

//store
router.post('/', (req,res) =>{
  res.send('Creazione nuovo cibo')
})

//update
router.put('/:id', (req,res)=>{
  res.send(`Modifico l'elemento cibo con id ${req.params.id} `)
})

//modify
router.patch('/:id', (req, res)=>{
  res.send(`Modifico parzialmente l'elemento cibo con id ${req.params.id}`)
})

//destroy
router.delete('/:id', (req,res)=>{
  res.send(`Elimino l'elemento cibo con id ${req.params.id}`)
})

module.exports = router