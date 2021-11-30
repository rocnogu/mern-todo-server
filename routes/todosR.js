import express from "express";
import {
  readTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todosC.js";
////////////////////////////////
const todosRoutes = express.Router();
todosRoutes.get("/", readTodo);
todosRoutes.post("/", createTodo);
todosRoutes.patch("/:id", updateTodo);
todosRoutes.delete("/:id", deleteTodo);
////////
export default todosRoutes;
