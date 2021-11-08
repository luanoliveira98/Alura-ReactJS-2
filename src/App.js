import React, { Component } from 'react';
import NoteList from './components/NoteList';
import RegisterForm from './components/RegisterForm';
import CategoriesList from './components/CategoriesList';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      notes: [],
      categories: [],
    };
  }

  createNote(title, text, category) {
    const newNote = {title,text, category};
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

  createCategory(category) {
    const newCategoriesArray = [...this.state.categories, category];
    const newState = {
      ...this.state,
      categories: newCategoriesArray,
    };
    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <RegisterForm
          categories={this.state.categories}
          createNote={this.createNote.bind(this)}
        />
        <main className="main-content">
          <CategoriesList 
            categories={this.state.categories}
            createCategory={this.createCategory.bind(this)} 
          />
          <NoteList
            notes={this.state.notes}
            deleteNote={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
