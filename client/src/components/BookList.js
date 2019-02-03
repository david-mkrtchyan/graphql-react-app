import { getBooksQuery } from '../queries/queries';
import React, { Component } from 'react';
import BookDetails from './BookDetails';
import { graphql } from 'react-apollo';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    render() {
        return (
            <div >
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
                <BookDetails bookId={this.state.selected}/>
            </div>
        );
    }

    displayBooks() {
        let data = this.props.data;
        return data.loading ?
            (<div>Loading books... </div>) :
            data.books.map(book => (<li key={book.id} onClick={(e) => this.setState({selected: book.id})}> { book.name } </li>))
    }
}

export default graphql(getBooksQuery)(BookList);
