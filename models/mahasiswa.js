const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  score: Number,
  nomerAbsen: Number,
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classRoom"
  },
});

const mahasiswa = mongoose.model("mahasiswa", mahasiswaSchema)
module.exports = mahasiswa;