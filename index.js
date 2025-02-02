const {connectMongo} = require("./db");
const express = require('express')
var cors = require('cors')
const app = express()

connectMongo();
app.use(cors())

const port = 5000;

app.use(express.json()) // Middleware

app.use('/api/auth',require('./routes/auth'))
app.use('/api/files',require('./routes/files'))


app.listen(port, () => {
  console.log(`app listening on port http://localhost: ${port}`)
})