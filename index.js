import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todosRoutes from "./routes/todosR.js";

//
const app = express();
dotenv.config();
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
//
app.use(cors());
//
app.use("/todos", todosRoutes);

app.get("/", (req, res) => {
  res.send("welcome to the server");
});
//
const PORT = process.env.PORT || 9876;
const CONNECTION_URL = process.env.CONNECTION_URL;
//
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
