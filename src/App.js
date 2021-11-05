import React, { Component } from 'react';
import NoteList from './components/NoteList';
import RegisterForm from './components/RegisterForm';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
  }

  createNote(title, text) {
    const newNote = {title,text};
    const newNotesArray = [...this.state.notes, newNote];
    const newState = {
      notes: newNotesArray,
    };
    this.setState(newState);
  }

  deleteNote(index) {
    let notesArray = this.state.notes;
    notesArray.splice(index, 1);
    this.setState(notesArray);
  }

  render() {
    return (
      <section className="content">
        <RegisterForm
          createNote={this.createNote.bind(this)}
        />
        <NoteList
          notes={this.state.notes}
          deleteNote={this.deleteNote.bind(this)}
        />
      </section>
    );
  }
}

export default App;
