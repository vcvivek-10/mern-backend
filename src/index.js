// require('dotenv').config({ path: "./env" })
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express"

const app = express()

dotenv.config({
    path: './.env'
})

//  2nd way 
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is listing on port ${process.env.PORT}`);
        })
        app.on("error", (error) => {
            console.log("Error", error);
            throw error
        })
    })
    .catch((error) => {
        console.log("MONODB db connection failed !! ", error);
    })







// 1 st way to connect database

// import express from "express"
// const app = express()

//     ; (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error", (error) => {
//                 console.log("Error", error);
//                 throw error
//             })
//             app.listen(process.env.PORT, () => {
//                 console.log(`App is listing on port ${process.env.PORT}`);
//             })
//         } catch (error) {
//             console.error("Error: ", error)
//             throw error
//         }
//     })()