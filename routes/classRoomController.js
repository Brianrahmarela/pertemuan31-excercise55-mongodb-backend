const express = require('express');
const {classRoom} = require('../models/')

const router = express.Router();

router.get('/', async (req, res) => {
  const classroom = await classRoom.find({})

  res.json({
    message: "success get data",
    data: classroom
  })
});

router.get('/:id', async (req, res) => {
  const classroom = await classRoom.findById(req.params.id)

  res.json({
    message: "success get data",
    data: classroom
  })
});

router.post('/', async (req, res) => {
  const classroom = await classRoom.create(req.body)

  res.json({
    message: "success add data",
    data: classroom
  })
});

router.put('/:id', async (req, res) => {
  const classroom = await classRoom.findByIdAndUpdate(req.params.id,req.body);
  // console.log('update classroom', classroom);
  
  try {
    res.send(classroom)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  const classroom = await classRoom.findByIdAndDelete(req.params.id);
  // console.log('delete classroom', classroom);
  
  try {
    res.send(classroom)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;