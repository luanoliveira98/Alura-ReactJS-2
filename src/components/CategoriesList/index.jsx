import React, { Component } from 'react';
import './style.css'

class CategoriesList extends Component {

    constructor() {
        super();
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
        this.setState({...this.state,categories});
    }

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
                    {this.state.categories.map((category, index) => {
                        return <li className="category-list_item" key={index}>{category}</li>
                    })}
                </ul>
                <input type="text"  className="category-list_input" placeholder="Add Category" onKeyUp={this._handleEventInput.bind(this)}/>
            </section>
        );
    }
}
 
export default CategoriesList;