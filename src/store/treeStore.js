export default class TreeStore {
    constructor(id, name, data = []) {
        this._id = id;
        this._name = name;
        this._data = data;
    }

    setId(id) {
        this._id = id;
    }

    setName(name) {
        this._name = name;
    }

    setData(data) {
        this._data = data;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getData() {
        return this._data;
    }
}