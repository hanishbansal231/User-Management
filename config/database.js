const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = () => {
    try{
        mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {console.log('Connected Database')})
        .catch((err) => {
            console.error(err);
            process.exit(1);
        })
    }catch(err){
        console.error(err);
    }
}
module.exports = connectDB;