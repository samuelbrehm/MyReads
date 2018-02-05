import React, { Component } from 'react';

class None extends Component {
  render() {
    const { books, update } = this.props;
    let none = books.filter(b => b.shelf === 'none');

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">None</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {none.map(book => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${book.imageLinks.thumbnail})`,
                        }}
                      />
                      <div className="book-shelf-changer">
                        <select
                          value={book.shelf}
                          onChange={e => update(book, e.target.value)}
                        >
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
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default None;
