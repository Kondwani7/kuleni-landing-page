const express = require("express")
const app = express()
const cors = require("cors")
const pool = require('./db')
const bodyParser = require("body-parser")
const morgan = require("morgan")

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
PORT = 8000

app.listen(PORT, () =>{
    console.log(`listening to port:${PORT}`)
})
//ROUTES//

//get all registered users
app.get('/registered', async (req, res) => {
    
})