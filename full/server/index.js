const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const routerP = require("./router/route")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(routerP)


mongoose.connect('mongodb+srv://kananqadirov2005:kanan_2005@cluster0.whn9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
  );