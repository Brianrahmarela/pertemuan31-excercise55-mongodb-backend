const mongoose = require('mongoose');

const ukmDetailSchema = new mongoose.Schema({
  nama: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "mahasiswa",
  },
  ukm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ukm",    
  }
});

//create tableotomatis
const ukmDetail = mongoose.model("ukmdetail",ukmDetailSchema);
module.exports = ukmDetail;