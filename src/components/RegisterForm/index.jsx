import React, { Component } from 'react';
import './style.css';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.title = "Title";
        this.text = "Text";
    }

    _handlerTitleChange(event) {
        event.stopPropagation();
        this.title = (event.target.value === "") ? "Title": event.target.value;
    }

    _handlerTextChange(event) {
        event.stopPropagation();
        this.text = (event.target.value === "") ? "Text": event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text);
    }

    render() {
        return (
            <form className="register-form" onSubmit={this._createNote.bind(this)}>
                <input className="register-form_input" type="text" placeholder="Tittle" onChange={this._handlerTitleChange.bind(this)}/>
                <textarea className="register-form_input" placeholder="Enter your note.." onChange={this._handlerTextChange.bind(this)}/>
                <button className="register-form_input register-form_submit">Create Note</button>
            </form>
        );
    }
}

export default  RegisterForm;
