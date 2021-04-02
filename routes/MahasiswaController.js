const express = require('express');
const {Mahasiswa} = require('../models/')

const router = express.Router();

//get all mahasiswa
router.get('/', async (req, res) => {
  const mahasiswa = await Mahasiswa.find({}).populate("class","-__v")
  try {
    res.status(200).json({
      message: "success get data",
      data: mahasiswa
    })
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//get id mahasiswa
router.get('/:id', async (req, res) => {
  const mahasiswa = await Mahasiswa.findById(req.params.id)
  try {
    res.status(200).json({
      message: "success get id data mahasiswa",
      data: mahasiswa
    })
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//post add mahasiswa
router.post('/', async (req, res) => {
  const mahasiswa = await Mahasiswa.create(req.body);
  console.log('post mahasiswa', mahasiswa);
  try {
    res.status(200).json({
      message: "success add data mahasiswa",
      data: mahasiswa
    })
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//put edit mahasiswa
router.put('/:id', async (req, res) => {
  const mahasiswa = await Mahasiswa.findByIdAndUpdate(req.params.id,req.body);
  console.log('update mahasiswa', mahasiswa);
  
  try {
    res.status(200).json({
      message: "success edit data mahasiswa",
      data: mahasiswa
    })
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//delete mahasiswa
router.delete('/:id', async (req, res) => {
  const mahasiswa = await Mahasiswa.findByIdAndDelete(req.params.id);
  console.log('delete mahasiswa', mahasiswa);
  
  try {
    res.status(200).json({
      message: "success delete data mahasiswa",
      data: mahasiswa
    })
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;