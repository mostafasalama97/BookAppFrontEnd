import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PageEdit.css";

const PageEdit = () => {
  const { PageId } = useParams();
  const [Pages, setPages] = useState([]);
  const [sucess, setsuccess] = useState("");
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    published_date: new Date(),
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/Page/api/Pages/2/`)
      .then((response) => {
        setPages(response.data);
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
  }, [PageId]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/Page/api/Pages/2/`, formData)
      .then((response) => {
        console.log("Page updated successfully!");
        setsuccess("updated successfully!");
      })
      .catch((error) => {
        console.error(error);
        setsuccess("updated failed!");
      });
  };

  return (
    <div className="container">
      <div>
        {Pages.length > 0 ? (
          <ul>
            {Pages.map((Page) => (
              <li key={Page.id}>
                <p>
                  <span className="maintitle">Title</span>: {Page.title}
                </p>
                <p>
                  <span className="maintitle">Author</span>: {Page.author}
                </p>
                <p>
                  <span className="maintitle">Description</span>:{" "}
                  {Page.description}
                </p>
                <p>
                  <span className="maintitle">Publication Date</span>:{" "}
                  {Page.publication_date}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
        <h1>Edit Page</h1>
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
        </form>
      </div>
    </div>
  );
};

export default PageEdit;
