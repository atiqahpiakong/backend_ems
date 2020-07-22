const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class LeaveModel {
    constructor() {
        if (this.instance) return this.instance;
        LeaveModel.instance = this;
    }

    get() { return database.getList('leave') }

    getById(id) { return database.get('leave', id) }

    getByUID(id) { return database.getUID('leave', id) }

    create(leaves) { return database.create('leave', leaves) }

    delete(id) { return database.delete('leave', id) }

    update(id, leaves) { return database.set('leave', id, leaves) }
}

module.exports = new LeaveModel();