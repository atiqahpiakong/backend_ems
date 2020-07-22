const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class TaskModel {
    constructor() {
        if (this.instance) return this.instance;
        TaskModel.instance = this;
    }

    get() { return database.getList('task') }

    getById(id) { return database.get('task', id) }

    getByUID(id) { return database.getUID('task', id) }

    create(tasks) { return database.create('task', tasks) }

    delete(id) { return database.delete('task', id) }

    update(id, tasks) { return database.set('task', id, tasks) }
}

module.exports = new TaskModel();