require("dotenv").config()
const express = require('express')

const {app} = require("./src/app")
const ConnectToMongo = require("./src/configs/Connect")


ConnectToMongo()
.then(()=>{
    app.listen(process.env.PORT , console.log("Server is Listening"))
})
.catch((error) => {
    console.log("There is an Error in Connecting Server and mongo db Connection");
    throw error
})





