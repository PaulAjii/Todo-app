require("dotenv").config()
const express = require("express")
const cors = require("cors")

const connectDB = require("./db/config")
const todoRoutes = require("./routes/Todo")
// TODO: Create a User route
// TODO: Create middlewares

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use("/api/v1/todos", todoRoutes)

const start = async () => {
  try {
    await connectDB(process.env.DB_URI)
    console.log("Successfully connected to the database...")
    app.listen(PORT, () => console.log(`Server running succesfully on port ${ PORT }...`))
  } catch (err) {
    console.error(err.message)
  }
}

start()