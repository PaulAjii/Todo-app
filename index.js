require("dotenv").config()
const express = require("express")
const cors = require("cors")

// * DB Config
const connectDB = require("./db/config")

// * ROUTES
const todoRoutes = require("./routes/Todo")
const userRoutes = require("./routes/User")

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use("/api/v1/todos", todoRoutes)
app.use("/api/v1/users", userRoutes)

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