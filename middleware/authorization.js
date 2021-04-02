const jwt = require('jsonwebtoken');
const {JWT_KEY} = require("../config")

//verifyToken digunakan sbg middleware sblm memasuki rute yg ingin diakses, digunakan di index.js folder routes
const verifyToken = (req, res, next) => {
  //TAHAP 4. client mengirim token ke server (send JWT in Authorization header)
  //ambil valuenya dari authorization
  const header = req.headers.authorization
  if(!header) {
    res.json({
      message: "undefined header"
    })
  }
  // console.log("HEADER", header);

  //ambil tokennya aja tanpa bearer melalui headers
  const token = header.split(" ")[1]
  //cek apakah token masih valid
  if(!token) throw new Error("Invalid token")
  //jika token valid, jwt.verify akan melakukan decode hashing tokennya, hasilnya akan ada sebuah data di variable payload
  const payload = jwt.verify(token, JWT_KEY)
  // console.log("PAYLOAD", payload);

  //ini utk menggunakan payload di routernya, kirim payloadnya
  req.payload = payload

  //izinkan lanjut ke routernya
  next()
}

module.exports = verifyToken