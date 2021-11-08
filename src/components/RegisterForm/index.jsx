import React, { Component } from 'react';
import './style.css';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.title = "Title";
        this.text = "Text";
        this.category = "Without Category";

        this.state = {
            categories: []
        };

        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount() {
        this.props.categories.subscribe(this._newCategories);
    }

    componentWillUnmount() {
        this.props.categories.unsubscribe(this._newCategories);
    }

    _newCategories(categories) {
        this.setState({...this.state, categories});
    }

    _handlerTitleChange(event) {
        event.stopPropagation();
        this.title = (event.target.value === "") ? "Title": event.target.value;
    }

    _handlerTextChange(event) {
        event.stopPropagation();
        this.text = (event.target.value === "") ? "Text": event.target.value;
    }

    _handlerCategoryChange(event) {
        event.stopPropagation();
        this.category = event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text, this.category);
    }

    render() {
        return (
            <form className="register-form" onSubmit={this._createNote.bind(this)}>
                <select className="register-form_input" onChange={this._handlerCategoryChange.bind(this)}>
                    <option value="Without Category">Without Category</option>
                    {this.state.categories.map((category, index) => {
                        return <option key={index} value={category}>{category}</option>
                    })}
                </select>
                <input className="register-form_input" type="text" placeholder="Tittle" onChange={this._handlerTitleChange.bind(this)}/>
                <textarea className="register-form_input" placeholder="Enter your note.." onChange={this._handlerTextChange.bind(this)}/>
                <button className="register-form_input register-form_submit">Create Note</button>
            </form>
        );
    }
}

export default  RegisterForm;
