import React, { Component } from 'react';
import './style.css';
import deleteSVG from "../../assets/img/delete.svg";

class CardNote extends Component {
    delete() {
        this.props.deleteNote(this.props.index);
    }
    render() { 
        return (
            <section className="card-note">
                <header className="card-note_header">
                    <h3 className="card-note_title">{this.props.title}</h3>
                    <img src={deleteSVG} alt="delete" onClick={this.delete.bind(this)}/>
                    <h4>{this.props.category}</h4>
                </header>
                <p className="card-note_text">{this.props.text}</p>
            </section>
        );
    }
}
 
export default CardNote;
