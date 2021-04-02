const mongoose = require('mongoose');

const ukmSchema = new mongoose.Schema({
  namaUkm: {
    type: String,
    require: true,
  },
  jenisUkm: String
});

//create tableotomatis
const Ukm = mongoose.model("ukm",ukmSchema);
module.exports = Ukm;