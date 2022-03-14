// 1- require mongoose
const mongoose = require('mongoose')
//2- connect to DB 
const connectDB = async () =>{
try {
 await mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
console.log("Database is  connected ....")

} catch (error) {
    console.log("Can not connect to DB !!!")

}
}
module.exports = connectDB