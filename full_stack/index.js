const express = require("express")
//const { connection } = require("mongoose")
const {UserModel, connection} = require("./db")

const app = express()

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Base API endpoint")
})


app.post("/signup", async(req,res)=> {
    const{name, email, password, age, phone_number} = req.body;
    console.log(req.body)
    res.send("sign up successfull")

})
app.listen(8050, async() => {
    try {
        await connection;
        console.log("connecting to DB Successfully")
    } 
    catch (error) {
        console.log("error while connecting to DB")
        console.log(error)
    }
    console.log("listening on port 8050")
})