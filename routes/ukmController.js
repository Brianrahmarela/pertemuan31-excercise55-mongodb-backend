const express = require('express');
const {Ukm} = require('../models');

const router = express.Router();

router.get('/', async(req,res) => {
    //populate dari propertinya
    const ukm = await Ukm.find({}, "-__v")
    try {
      res.status(200).json({
        message: "success get data ukm",
        data: ukm
      })
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
})

router.post('/', async(req,res) => {
    //populate dari propertinya
    const ukm = await Ukm.create(req.body);
    try {
      res.status(200).json({
        message: "success add data ukm",
        data: ukm
      })
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
})

module.exports = router;