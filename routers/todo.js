const { Router } = require("express");
const TodoController = require("../controllers/todo");
const TodoService = require("../services/todo");

const router = Router();
const controller = new TodoController({
  todoService: new TodoService(),
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
