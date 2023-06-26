import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookEdit.css";
import Navbar from "../../HomePage/Navbar/Navbar";



const BookEdit = () => {
  const { bookId } = useParams();
  const [books, setBooks] = useState([]);
  const [sucess, setsuccess] = useState("");
  const [delSucess, setDelSucess] = useState("");
  const [createSucess, setCreateSucess] = useState("");
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    published_date: new Date(),
  });
  const [formDataCreate, setFormDataCreate] = useState({
    author: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/book/api/books/2/`)
      .then((response) => {
        setBooks(response.data);
        setFormData({
          author: response.data.author,
          title: response.data.title,
          description: response.data.description,
          published_date: new Date(response.data.published_date),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [bookId]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCreate = (event) => {
    setFormDataCreate({ ...formDataCreate, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/book/api/books/2/`, formData)
      .then((response) => {
        console.log("Book updated successfully!");
        setsuccess("updated successfully!");
      })
      .catch((error) => {
        console.error(error);
        setsuccess("updated failed!");
      });
  };


  const handleCreateButton = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8000/book/api/booksCreate/`, formData)
      .then((response) => {
        console.log("Book Created successfully!");
        setCreateSucess("Created successfully!");
      })
      .catch((error) => {
        console.error(error);
        setCreateSucess("Created failed!");
      });
  };


  const handleDeleyeBtn = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8000/book/api/books/2/`, formData)
      .then((response) => {
        console.log("Book Deleted successfully!");
        response.data.author = ''
        response.data.title = ''
        response.data.description = ''
        setDelSucess("Deleted successfully!");
      })
      .catch((error) => {
        console.error(error);
        setDelSucess("Deleted failed!");
      });
  };


  return (
    <>
    <Navbar />
    <div className="container">
      <div>
        {books.length > 0 ? (
          <ul>
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
                  <span className="maintitle">Publication Date</span>:{" "}
                  {book.publication_date}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
        <h1>Edit Book</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>published_date:</label>
            <input
              type="text"
              name="published_date"
              value={formData.published_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Save</button>
            <p>{sucess}</p>
          </div>
          <div>
            {/* <button onClick={() => {handleDeleyeBtn}}>Delete Book</button> */}
            <button onClick={handleDeleyeBtn}>Delete Book</button>
            <p>{delSucess}</p>
          </div>
        </form>

        <h1>Create Book</h1>
        <form onSubmit={handleCreateButton}>
          <div>
            <label>Author:</label>
            <input
              type="text"
              name="author"
              // value={formData.author}
              onChange={handleCreate}
            />
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              // value={formData.title}
              onChange={handleCreate}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              // value={formData.description}
              onChange={handleCreate}
            />
          </div>
          {/* <div>
            <label>published_date:</label>
            <input
              type="text"
              name="published_date"
              // value={formData.published_date}
              onChange={handleChange}
            />
          </div> */}
          <div>
            <button type="submit" >Create Book</button>
            <p>{createSucess}</p>
          </div>
        </form>
      </div>
    </div>

    </>
  );
};

export default BookEdit;
