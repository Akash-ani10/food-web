import mongoose  from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://akashkr09:Akki040913@cluster0.5tize.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}