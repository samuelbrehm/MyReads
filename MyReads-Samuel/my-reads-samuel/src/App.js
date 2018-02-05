import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ListBooks from './ListBooks';
import Search from './Components/Search';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            //console.log(BooksAPI.getAll());

            this.setState({books});
        });
    }

    updateBook(book, shelf) {
        BooksAPI.update(book, shelf);
        book.shelf = shelf;
        let livros = this.state.books.filter(b => b.id !== book.id).concat(book);
        this.setState({books: livros});
    }

    render() {
        return (
            <div className="app">
                <Route
                    exact
                    path="/"
                    render={() => (
                        <ListBooks
                            books={this.state.books}
                            onUpdateBook={(book, shelf) => {
                                this.updateBook(book, shelf);
                            }}
                        />
                    )}
                />

                <Route
                    path="/search"
                    render={() => (
                        <Search
                            books={this.state.books}
                            onUpdateBook={(book, shelf) => {
                                this.updateBook(book, shelf);
                            }}
                        />
                    )}
                />

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BooksApp;
