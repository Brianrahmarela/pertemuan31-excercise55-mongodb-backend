const express = require('express');
const router = express.Router();

const classRoomRouter = require('./classRoomController');
const ukmRouter = require('./ukmController')
const ukmDetailRoomRouter = require('./ukmDetailController')
const mahasiswaRouter = require('./MahasiswaController')
const authRouter = require('./auth')
const verifyToken = require('../middleware/authorization')


router.use("/auth", authRouter)
router.use("/class", classRoomRouter)
router.use("/ukm", ukmRouter)
router.use("/detailukm", verifyToken, ukmDetailRoomRouter)
router.use("/mahasiswa", mahasiswaRouter)

module.exports = router

