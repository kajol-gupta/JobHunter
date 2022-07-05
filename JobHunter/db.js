const mongoose = require("mongoose");
dbConnect()
async function dbConnect() {

    try {
        await mongoose.connect('mongodb://localhost/jobhunterdb', { useNewUrlParser: true });
        console.log('Mongo DB Connection successfull')
    } catch (error) {
        console.log('Mongo DB Connection failed')
    }

}

module.exports = mongoose