import React, { Component } from 'react';
import CurrentlyReading from './Components/CurrentlyReading';
import WantToRead from './Components/WantToRead';
import Read from './Components/Read';
import None from './Components/None';


class ListBooks extends Component {

  render() {
    const { books, onUpdateBook } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <CurrentlyReading
            books={books}
            update={(book, shelf) => {
              onUpdateBook(book, shelf);
            }}
          />
          <WantToRead
            books={books}
            update={(book, shelf) => {
              onUpdateBook(book, shelf);
            }}
          />
          <Read
            books={books}
            update={(book, shelf) => {
              onUpdateBook(book, shelf);
            }}
          />
          <None
            books={books}
            update={(book, shelf) => {
              onUpdateBook(book, shelf);
            }}
          />
        </div>

      </div>
    );
  }
}

export default ListBooks;
