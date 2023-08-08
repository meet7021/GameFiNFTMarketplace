const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000/"],
    methods: ["GET", "POST"],
    credentials: true
}))

mongoose.connect('');
S
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({ name, email, password: hash })
                .then(user => res.json("Success"))
                .catch(err => res.json(err))
        }).catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})