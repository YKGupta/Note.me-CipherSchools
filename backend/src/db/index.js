const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database successfully");
}).catch((err) => {
    console.log(`Error connecting to database : ${err}`);
});