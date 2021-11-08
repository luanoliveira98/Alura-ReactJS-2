export default class Categories {
    constructor() {
        this.categories = [];
        this._subscribers = [];
    }

    subscribe(func) {
        this._subscribers.push(func);
    }

    unsubscribe(func) {
        this._registers = this._registers.filter(f => f !== func);
    }

    notify() {
        this._subscribers.forEach(func => {
            func(this.categories);
        })
    }

    create(data) {
        this.categories.push(data);
        this.notify();
    }
}