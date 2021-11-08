export default class Categories {
    constructor() {
        this.categories = [];
        this._registers = [];
    }

    register(func) {
        this._registers.push(func);
    }

    notify() {
        this._registers.forEach(func => {
            func(this.categories);
        })
    }

    create(data) {
        this.categories.push(data);
    }
}