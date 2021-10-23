class TodoController {
  constructor({ todoService }) {
    this.todoService = todoService;
  }

  getAll(_, res) {
    const list = this.todoService.getAll();
    return res.json(list);
  }

  getById(req, res) {
    const { id } = req.params;
    const todo = this.todoService.getById(id);
    return res.json(todo);
  }

  create(req, res) {
    const { activity } = req.body;
    const result = this.todoService.create({ activity });
    return res.json(result);
  }

  update(req, res) {
    const { id } = req.params;
    const { activity } = req.body;
    const result = this.todoService.update(id, { activity });
    return res.json(result);
  }

  delete(req, res) {
    const { id } = req.params;
    const result = this.todoService.delete(id);
    return res.json(result);
  }
}

module.exports = TodoController;
