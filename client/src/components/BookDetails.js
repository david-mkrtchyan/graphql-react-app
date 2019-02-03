import { getBookQuery } from '../queries/queries';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

class BookDetails extends Component {

    render() {
        return (
            <div id="book-details">
                <p>Output book details here</p>
                {this.displayBookDetails()}
            </div>
        );
    }

    displayBookDetails() {
        const { book } = this.props.data;
        if (book) {
            return (
                <div>
                    <h2>{ book.name }</h2>
                    <p>{ book.genre }</p>
                    <p>{ book.author.name }</p>
                    <p>All books by this author</p>
                    <ul className="other-books">
                        {
                            book.author.books.map(item => <li key={ item.id }>{ item.name }</li>)
                        }
                    </ul>
                </div>
            );
        } else {
            return (<div> No book selected... </div>)
        }
    }
}

export default graphql(getBookQuery, {
    options: props => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);