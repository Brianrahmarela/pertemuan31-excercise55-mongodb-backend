const express = require('express');
const {ukmDetail} = require('../models');

const router = express.Router();

router.get('/', async(req,res) => {
    //populate dari propertinya
    const ukmdetail = await ukmDetail.find({}, "-__v").populate("ukm","-__v").populate("nama","-__v")
    // console.log("dari get /detailukm", req.payload)

    try {
      res.status(200).json({
        message: "success get data detail ukm",
        data: ukmdetail
      })
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
})

router.post('/', async(req,res) => {
    //populate dari propertinya
    const ukmdetail = await ukmDetail.create(req.body);
    try {
      res.status(200).json({
        message: "success add data detail ukm",
        data: ukmdetail
      })
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
})

module.exports = router;