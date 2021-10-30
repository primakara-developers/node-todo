const { Router } = require("express");
const TodoController = require("../controllers/todo");
const TodoSqlService = require("../services/todo_sql");
const { Todo } = require("../models");

const router = Router();

const controller = new TodoController({
  todoService: new TodoSqlService({ todoModel: Todo }),
});

router.get("/", (req, res) => {
  return controller.getAll(req, res);
});
router.get("/:id", (req, res) => {
  return controller.getById(req, res);
});
router.post("/", (req, res) => {
  return controller.create(req, res);
});
router.put("/:id", (req, res) => {
  return controller.update(req, res);
});
router.delete("/:id", (req, res) => {
  return controller.delete(req, res);
});

module.exports = router;
