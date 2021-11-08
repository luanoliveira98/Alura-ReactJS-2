export default class Notes {
    constructor() {
        this.notes = [];
        this._registers = [];
    }

    subscribe(func) {
        this._registers.push(func);
    }

    unsubscribe(func) {
        this._registers = this._registers.filter(f => f !== func);
    }

    notify() {
        this._registers.forEach(func => {
            func(this.notes);
        })
    }

    create(title, text, category) {
        const data = new Note(title, text, category);
        this.notes.push(data);
        this.notify();
    }

    delete(index) {
        this.notes.splice(index, 1);
        this.notify();
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}