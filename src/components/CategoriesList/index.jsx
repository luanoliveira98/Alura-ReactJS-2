import React, { Component } from 'react';
import './style.css'

class CategoriesList extends Component {
    _handleEventInput(e) {
        if (e.key === 'Enter') {
            this.props.createCategory(e.target.value);
            e.target.value = "";
        }
    }

    render() {
        return (
            <section className="category-list">
                <ul className="category-list_list">
                    {this.props.categories.map((category, index) => {
                        return <li className="category-list_item" key={index}>{category}</li>
                    })}
                </ul>
                <input type="text"  className="category-list_input" placeholder="Add Category" onKeyUp={this._handleEventInput.bind(this)}/>
            </section>
        );
    }
}
 
export default CategoriesList;