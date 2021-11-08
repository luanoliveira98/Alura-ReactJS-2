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
          categories={this.categories}
          createNote={this.notes.create.bind(this.notes)}
        />
        <main className="main-content">
          <CategoriesList 
            categories={this.categories}
            createCategory={this.categories.create.bind(this.categories)} 
          />
          <NoteList
            notes={this.notes}
            deleteNote={this.notes.delete.bind(this.notes)}
          />
        </main>
      </section>
    );
  }
}

export default App;
