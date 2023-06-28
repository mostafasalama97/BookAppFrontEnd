import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Booklist.css";
import Navbar from "../../HomePage/Navbar/Navbar";

function Booklist() {
  const [books, setBooks] = useState([]);
  const isAuthenticated = localStorage.getItem("jwtToken");
  // console.log("isAuthenticated", isAuthenticated);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/book/api/booksList/"
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="booklist-container">
        <h1 className="booklist-title">Docpert Book App</h1>
        <h2 className="booklist-title">Our Books, Our Library</h2>
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          <ul className="booklist">
            {books.map((book) => (
              <li key={book.id}>
                <p>
                  <span className="maintitle">Title</span>: {book.title}
                </p>
                <p>
                  <span className="maintitle">Author</span>: {book.author}
                </p>
                <p>
                  <span className="maintitle">Description</span>:{" "}
                  {book.description}
                </p>
                <p>
                  <span className="maintitle">publication_date</span>:{" "}
                  {book.publication_date}
                </p>
                {/* <Button className="btn-edit" variant="outline-primary">
                  goto Page
                </Button>
                <Button className="btn-edit" variant="outline-danger">
                  Edit Book
                </Button>
                <Button className="btn-edit" variant="outline-warning">
                 Read Book
                </Button> */}
                <Link to={`/book/edit/${book.id}`}>
                  {isAuthenticated ? (
                    <Button className="btn-edit" variant="outline-danger">
                      Edit Book
                      {/* <p>{isAuthenticated}</p> */}
                    </Button>
                  ) : (
                    <Button
                      className="btn-edit"
                      variant="outline-danger"
                      disabled
                    >
                      Edit Book
                    </Button>
                  )}
                </Link>
                <Link to={`/book/read/${book.id}`}>
                  <Button className="btn-edit" variant="outline-primary">
                    Read Book
                  </Button>
                </Link>
                <span className="never">allow only for Author</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Booklist;
