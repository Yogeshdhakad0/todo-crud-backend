const {  mongoose } = require("mongoose")

const conntectDB= async()=>{

try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
console.log('success ful connect',conn.connection.host)
} catch (error) {
    console.log(error.message)
}

}
module.exports=conntectDB