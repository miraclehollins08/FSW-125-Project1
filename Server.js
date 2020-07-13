const express = require("express")
const app = express()

app.get("/user", (req, res)=> {
    res.send("Hi Nora Best Friend!")
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})