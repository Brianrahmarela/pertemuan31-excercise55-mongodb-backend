const mongoose = require('mongoose');

const classRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lantai: Number,
});

const classRoom = mongoose.model("classRoom", classRoomSchema)
module.exports = classRoom;