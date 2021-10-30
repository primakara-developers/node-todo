class TodoSqlService {
  constructor({ todoModel }) {
    this.todoModel = todoModel;
  }

  async getAll() {
    return this.todoModel.findAll();
  }

  async getById(id) {
    return this.todoModel.findOne({ where: { id } });
  }

  async create({ activity }) {
    return this.todoModel.create({ activity });
  }

  async update(id, { activity }) {
    return this.todoModel.update({ activity }, { where: { id } });
  }

  async delete(id) {
    return this.todoModel.destroy({ where: { id } });
  }
}

module.exports = TodoSqlService;
