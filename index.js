const express = require("express");
const cors = require("cors");
const app = express();

const {PORT, dbConfigMongo} = require('./config')
const localPort = PORT || 3000;

//controller
const allRouter = require('./routes')
// const mahasiswaRouter = require('./routes/MahasiswaController')
// const classRoomRouter = require('./routes/classRoomController')
// const ukmRouter = require('./routes/ukmController')
// console.log(mahasiswaRouter);
console.log("ini localport", localPort);
// console.log("db mongo config", dbConfigMongo);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello, welcome to exprss mongodb");
})

app.use(allRouter)

  if(dbConfigMongo){
    app.listen(PORT, () => {
      console.log("server running on port", PORT);
      console.log("konek mongo");
    })
  }else{
    console.log('belum konek db mongo');
  }