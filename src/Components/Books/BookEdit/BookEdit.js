// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./BookEdit.css";
// import Navbar from "../../HomePage/Navbar/Navbar";

// const BookEdit = () => {
//   const { bookId } = useParams();
//   const [books, setBooks] = useState([]);
//   const [success, setSuccess] = useState("");
//   const [delSuccess, setDelSuccess] = useState("");
//   const [createSuccess, setCreateSuccess] = useState("");
//   const [formData, setFormData] = useState({
//     author: "",
//     title: "",
//     description: "",
//     published_date: new Date(),
//   });
//   const [formDataCreate, setFormDataCreate] = useState({
//     author: "",
//     title: "",
//     description: "",
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("jwtToken");
  
//     const headers = {
//       Authorization: `JWT ${token}`,
//       "Content-Type": "application/json",
//     };
  
//     axios
//       .get(`http://localhost:8000/book/api/books/5/`, { headers })
//       .then((response) => {
//         setBooks(response.data);
//         setFormData({
//           author: response.data.author,
//           title: response.data.title,
//           description: response.data.description,
//           published_date: new Date(response.data.published_date),
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);  

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleCreate = (event) => {
//     setFormDataCreate({ ...formDataCreate, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios
//       .put(`http://localhost:8000/book/api/books/5/`, formData)
//       .then((response) => {
//         console.log("Book updated successfully!");
//         setSuccess("Updated successfully!");
//       })
//       .catch((error) => {
//         console.error(error);
//         setSuccess("Update failed!");
//       });
//   };

//   const handleCreateButton = (event) => {
//     event.preventDefault();

//     axios
//       .post(`http://localhost:8000/book/api/booksCreate/`, formData)
//       .then((response) => {
//         console.log("Book created successfully!");
//         setCreateSuccess("Created successfully!");
//       })
//       .catch((error) => {
//         console.error(error);
//         setCreateSuccess("Creation failed!");
//       });
//   };

//   const handleDeleteBtn = (event) => {
//     event.preventDefault();

//     axios
//       .delete(`http://localhost:8000/book/api/books/2/`)
//       .then((response) => {
//         console.log("Book deleted successfully!");
//         setDelSuccess("Deleted successfully!");
//       })
//       .catch((error) => {
//         console.error(error);
//         setDelSuccess("Deletion failed!");
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div>
//           {books.length > 0 ? (
//             <ul>
//               {books.map((book) => (
//                 <li key={book.id}>
//                   <p>
//                     <span className="maintitle">Title</span>: {book.title}
//                   </p>
//                   <p>
//                     <span className="maintitle">Author</span>: {book.author}
//                   </p>
//                   <p>
//                     <span className="maintitle">Description</span>:{" "}
//                     {book.description}
//                   </p>
//                   <p>
//                     <span className="maintitle">Published Date</span>:{" "}
//                     {book.published_date}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//         <form className="form-control">
//           <h3>Edit Book</h3>
//           <div className="form-group">
//             <label htmlFor="author">Author</label>
//             <input
//               type="text"
//               name="author"
//               className="form-control"
//               value={formData.author}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               name="title"
//               className="form-control"
//               value={formData.title}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <input
//               type="text"
//               name="description"
//               className="form-control"
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="published_date">Published Date</label>
//             <input
//               type="date"
//               name="published_date"
//               className="form-control"
//               value={formData.published_date}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
//             Update
//           </button>
//           {success && <p>{success}</p>}
//         </form>
//         <form className="form-control">
//           <h3>Create Book</h3>
//           <div className="form-group">
//             <label htmlFor="author">Author</label>
//             <input
//               type="text"
//               name="author"
//               className="form-control"
//               value={formDataCreate.author}
//               onChange={handleCreate}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               name="title"
//               className="form-control"
//               value={formDataCreate.title}
//               onChange={handleCreate}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <input
//               type="text"
//               name="description"
//               className="form-control"
//               value={formDataCreate.description}
//               onChange={handleCreate}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" onClick={handleCreateButton}>
//             Create
//           </button>
//           {createSuccess && <p>{createSuccess}</p>}
//         </form>
//         <form className="form-control">
//           <h3>Delete Book</h3>
//           <button type="submit" className="btn btn-primary" onClick={handleDeleteBtn}>
//             Delete
//           </button>
//           {delSuccess && <p>{delSuccess}</p>}
//         </form>
//       </div>
//     </>
//   );
// };

// export default BookEdit;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookEdit.css";
import Navbar from "../../HomePage/Navbar/Navbar";

const BookEdit = () => {
  const { bookId } = useParams();
  const [books, setBooks] = useState([]);
  const [success, setSuccess] = useState("");
  const [delSuccess, setDelSuccess] = useState("");
  const [createSuccess, setCreateSuccess] = useState("");
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
    const token = localStorage.getItem("jwtToken");
    // console.log("Token:", token); // Check token value
    if (!token) {
      console.error("JWT token is missing.");
      return;
    }
    const headers = {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json",
    };
    // console.log("Headers:", headers); // Check headers
    axios
      .get(`http://localhost:8000/book/api/books/${bookId}/`, { headers })
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

  // const handleCreate = (event) => {
  //   setFormDataCreate({ ...formDataCreate, [event.target.name]: event.target.value });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("jwtToken");

    if (!token) {
      console.error("JWT token is missing.");
      return;
    }

    const headers = {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .put(`http://localhost:8000/book/api/books/${bookId}/`, formData, { headers })
      .then((response) => {
        console.log("Book updated successfully!");
        setSuccess("Updated successfully!");
      })
      .catch((error) => {
        console.error(error);
        setSuccess("Update failed!");
      });
  };

  // const handleCreateButton = (event) => {
  //   event.preventDefault();
  //   const token = localStorage.getItem("jwtToken");  
  //   if (!token) {
  //     console.error("JWT token is missing.");
  //     return;
  //   }
  //   console.log(token)
  //   const headers = {
  //     Authorization: `JWT ${token}`,
  //     "Content-Type": "application/json",
  //   };
  //   console.log(headers)
  //   // const requestData = JSON.stringify(formData); // Convert request data to JSON string
  
  //   axios
  //     .post(`http://localhost:8000/book/api/booksCreate/`, formDataCreate, { headers })
  //     .then((response) => {
  //       console.log("Book created successfully!");
  //       setCreateSuccess("Created successfully!");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setCreateSuccess("Creation failed!");
  //     });
  // };
  

  const handleDeleteBtn = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("jwtToken");

    if (!token) {
      console.error("JWT token is missing.");
      return;
    }

    const headers = {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete(`http://localhost:8000/book/api/books/${bookId}/`, { headers })
      .then((response) => {
        console.log("Book deleted successfully!");
        setDelSuccess("Deleted successfully!");
      })
      .catch((error) => {
        console.error(error);
        setDelSuccess("Deletion failed!");
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Edit Book where ID =  {bookId}</h2>
        <form className="form-control">
          <h3>Edit Book</h3>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              className="form-control"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="published_date">Published Date</label>
            <input
              type="date"
              name="published_date"
              className="form-control"
              value={formData.published_date}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
          {success && <p>{success}</p>}
        </form>
        {/* <form className="form-control">
          <h3>Create Book</h3>
          
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formDataCreate.title}
              onChange={handleCreate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={formDataCreate.description}
              onChange={handleCreate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="published_date">Published Date</label>
            <input
              type="date"
              name="published_date"
              className="form-control"
              value={formDataCreate.published_date}
              onChange={handleCreate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              className="form-control"
              value={formDataCreate.author}
              onChange={handleCreate}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleCreateButton}>
            Create
          </button>
          {createSuccess && <p>{createSuccess}</p>}
        </form> */}
        <form className="form-control">
          <h3>Delete Book</h3>
          <button type="submit" className="btn btn-primary" onClick={handleDeleteBtn}>
            Delete
          </button>
          {delSuccess && <p>{delSuccess}</p>}
        </form>
      </div>
    </>
  );
};

export default BookEdit;
