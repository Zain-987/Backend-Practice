const mongoose = require("mongoose")

const ConnectToMongo = async () => {

    try{


        await mongoose.connect(process.env.MONGO_URI)

        console.log("Mongo Connected ! ");
    }catch(error){
        console.log("Mongo Error : " , error.message);

        process.exit(1)
    }
}


module.exports = ConnectToMongo