class TodoController {
  constructor({ todoService }) {
    this.todoService = todoService;
  }

  async getAll(_, res) {
    const list = await this.todoService.getAll();
    return res.json(list);
  }

  async getById(req, res) {
    const { id } = req.params;
    const todo = await this.todoService.getById(id);
    return res.json(todo);
  }

  async create(req, res) {
    const { activity } = req.body;
    const result = await this.todoService.create({ activity });
    return res.json(result);
  }

  async update(req, res) {
    const { id } = req.params;
    const { activity } = req.body;
    const result = await this.todoService.update(id, { activity });
    return res.json(result);
  }

  async delete(req, res) {
    const { id } = req.params;
    const result = await this.todoService.delete(id);
    return res.json(result);
  }
}

module.exports = TodoController;
