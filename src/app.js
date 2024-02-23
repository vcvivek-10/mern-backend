import express, { json } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// when data comes from form then accept into json or etc 
app.use(express.json({ limit: "16kb" }))

// when data comes from url then accept it and extended use for nested object
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// store assets like incoming file or img and etc use with the static with folder name public or any
app.use(express.static("public"))

// for set cookie or get cookie use cookieParser
app.use(cookieParser())

export { app }