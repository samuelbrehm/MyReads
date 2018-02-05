import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class Search extends Component {
    state = {
        query: '',
        listBooks: []
    };

    searchBooks(query) {
        BooksAPI.search(query).then(searchedBooks => {


            const booksPesquisa = searchedBooks.map((livro) => {
                let contemLivro = this.props.books.find((livroShelf) => livroShelf.id === livro.id)

                if (contemLivro) {
                    return contemLivro
                } else {
                    return livro
                }
            })

            this.setState({listBooks: booksPesquisa});
        }).catch(error => {
            this.setState({listBooks: []});
        });
    }

    updateQuery = query => {
        this.setState({query: query});
        this.searchBooks(query);
    };

    render() {
        const {books, onUpdateBook} = this.props;
        const {query, listBooks} = this.state;

        return (<div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query}
                           onChange={e => this.updateQuery(e.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        listBooks.length > 0 && listBooks.map(book => (<li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                                    }}/>
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf} onChange={e => onUpdateBook(book, e.target.value)}>
                                            <option value="none" disabled="disabled">
                                                Move to...
                                            </option>
                                            <option value="currentlyReading">
                                                Currently Reading
                                            </option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>))
                    }
                </ol>
            </div>
        </div>);
    }
}

export default Search;
