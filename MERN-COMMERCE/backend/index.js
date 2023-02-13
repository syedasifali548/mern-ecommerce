const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const authRoute = require("./routes/auth") 
const usersRoute = require("./routes/user") 
const productRoute = require("./routes/product") 
const cartRoute = require("./routes/cart") 
const orderRoute = require("./routes/order") 
const stripeRoute = require("./routes/stripe") 
const cors = require("cors")


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB connected successfully!")).catch((error)=>console.log(error))

app.use(cors())
app.use(express.json())
app.use("/api/checkout", stripeRoute);
app.use("/api/users",usersRoute)
app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)
app.use("/api/carts",cartRoute)
app.use("/api/orders",orderRoute)

app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend Server is Runnig!");
})


