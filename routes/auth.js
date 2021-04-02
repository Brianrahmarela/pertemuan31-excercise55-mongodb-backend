const express = require('express');
const {Mahasiswa} = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {JWT_KEY} = require("../config")

router.post("/register", async (req,res) => {
  //ketika register akan ngirim informasi usernya lwt req.body
  const user = req.body

  const hashPassword = await bcrypt.hash(user.password, 10);

  if(!hashPassword) throw new Error("error hash password")
  // Store hash in your password DB.
  const mahasiswa = await Mahasiswa.create({
    name: user.name,
    password: hashPassword
  })
  try {
    res.status(200).json({
      message: "user berhasil dibuat",
      data: mahasiswa
    })
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

  // const {password, ...rest} = mahasiswa
})

router.post("/login", async (req,res) => {
  //TAHAPAN TOKEN
  //TAHAP 1.post/login with username+passwrd menggunkan req.body
  const {name, password} = req.body

  //ketika user login sistem akan mencari data user ketika register di db
                                              //ini variable dari user
  let user = await Mahasiswa.findOne({name: name})
  //jika user ada & passnya benar 
  if(user && bcrypt.compareSync(password, user.password)){
    //ubah user dari mongodb yg masih dlm bentuk document ke object
    user = user.toObject()
    const {password, ...payload} = user
    // console.log(user);
    // console.log("payload destructure", payload);

    //TAHAP 2.buat token (harus object), mskkan data payload
    const token = jwt.sign(payload, JWT_KEY)
    
    //TAHAP 3. return jwt to the browser
    //setelah token berhasil digenerate, server mngirim response balik keclient
    res.json({
      message: "login sukses",
      token
    })
  }else {
    res.json({
      message: "invalid email and password",
    })    
  }
})

module.exports = router