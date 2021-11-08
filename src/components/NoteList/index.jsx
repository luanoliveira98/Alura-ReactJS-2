import React, { Component } from 'react';
import CardNote from '../CardNote';
import './style.css';

class NoteList extends Component {

    constructor() {
        super();
        this.state = {
            notes: []
        };

        this._newNotes = this._newNotes.bind(this);
    }

    componentDidMount() {
        this.props.notes.subscribe(this._newNotes);
    }

    componentWillUnmount() {
        this.props.notes.unsubscribe(this._newNotes);
    }

    _newNotes(notes) {
        this.setState({...this.state, notes});
    }

    render() { 
        return(
            <ul className="note-list">
                {this.state.notes.map((note, index) => {
                    return (
                        <li className="note-list_item" key={index}>
                            <CardNote
                                index = {index}
                                title = {note.title}
                                text = {note.text}
                                category = {note.category}
                                deleteNote = {this.props.deleteNote}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default  NoteList;
