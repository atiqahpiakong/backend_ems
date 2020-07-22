const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class UserModel {
    constructor() {
        if (this.instance) return this.instance;
        UserModel.instance = this;
    }

    get() { return database.getList('user') }

    getById(id) { return database.get('user', id) }

    getByUID(id) { return database.getUIDProfile('user', id) }

    create(users) { return database.create('user', users) }

    delete(id) { return database.delete('user', id) }

    update(id, users) { return database.set('user', id, users) }
}

module.exports = new UserModel();