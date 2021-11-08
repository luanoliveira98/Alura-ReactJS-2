export default class Notes {
    constructor() {
        this.notes = [];
        this._registers = [];
    }

    register(func) {
        this._registers.push(func);
    }

    notify() {
        this._registers.forEach(func => {
            func(this.notes);
        })
    }

    create(title, text, category) {
        const note = new Note(title, text, category);
        this.notes.push(note);
    }

    delete(index) {
        this.notes.splice(index, 1);
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}