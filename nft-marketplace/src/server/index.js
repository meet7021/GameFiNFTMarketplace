const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel = require('./mongoose/schema')

const app = express()
app.use(express.json())
// app.use(cors({
//     origin: ["http://localhost:3000/"],
//     methods: ["GET", "POST"],
//     credentials: true
// }))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/Registration');

app.post('/Signup', (req, res) => {

    UserModel.create(req.body)
        .then(employees => res.json(users))
        .catch(err => res.json(err))
}
)

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return res.json("Success")
                }
                else {
                    return res.json("The password is incorrect")
                }
            })
} else {
    return res.json("No record existed")
}
    })
})


app.listen(3001, () => {
    console.log("Server is Running")
})