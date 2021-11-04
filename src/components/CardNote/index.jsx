import React, { Component } from 'react';
import './style.css';

class CardNote extends Component {
    render() { 
        return (
            <section className="card-note">
                <header className="card-note_header">
                    <h3 className="card-note_title">{this.props.title}</h3>
                </header>
                <p className="card-note_text">{this.props.text}</p>
            </section>
        );
    }
}
 
export default CardNote;
