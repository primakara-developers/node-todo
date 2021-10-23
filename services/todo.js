const { nanoid } = require("nanoid");

class TodoService {
  constructor({ list = [] } = {}) {
    this.list = list;
  }

  getAll() {
    return this.list;
  }

  getById(id) {
    return this.list.find((todo) => todo.id == id);
  }

  create(todo) {
    const newTodo = { id: nanoid(4), ...todo };
    this.list.unshift(newTodo);
    return newTodo;
  }

  update(id, updated) {
    const index = this.list.findIndex((todo) => todo.id == id);
    const updatedTodo = { ...this.list[index], ...updated };
    this.list[index] = updatedTodo;
    return updatedTodo;
  }

  delete(id) {
    this.list = this.list.filter((todo) => todo.id != id);
    return true;
  }
}

module.exports = TodoService;
