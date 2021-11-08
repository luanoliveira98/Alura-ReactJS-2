import React, { Component } from 'react';
import NoteList from './components/NoteList';
import RegisterForm from './components/RegisterForm';
import CategoriesList from './components/CategoriesList';
import "./assets/App.css";
import './assets/index.css';
import Categories from "./data/Categories";
import Notes from "./data/Notes";

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new Notes();
  }

  render() {
    return (
      <section className="content">
        <RegisterForm
          categories={this.categories.categories}
          createNote={this.notes.create}
        />
        <main className="main-content">
          <CategoriesList 
            categories={this.categories.categories}
            createCategory={this.categories.create} 
          />
          <NoteList
            notes={this.notes.notes}
            deleteNote={this.notes.delete}
          />
        </main>
      </section>
    );
  }
}

export default App;
