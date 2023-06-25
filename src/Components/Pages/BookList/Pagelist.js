import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import "./Pagelist.css";

function Pagelist() {
  const [Pages, setPages] = useState([]);


  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/Page/api/PagesList/"
        );
        setPages(response.data);
      } catch (error) {
        console.error("Error fetching Pages:", error);
      }
    };

    fetchPages();
  }, []);

  return (
    <div className="Pagelist-container">
      <h1 className="Pagelist-title">Docpert Page App</h1>
      <h2 className="Pagelist-title">Our Pages, Our Library</h2>
      {Pages.length === 0 ? (
        <p>No Pages available.</p>
      ) : (
        <ul className="Pagelist">
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
                <span className="maintitle">publication_date</span>:{" "}
                {Page.publication_date}
              </p>
                <Button className="btn-edit" variant="outline-primary">
                  goto Page
                </Button>
              <Button
                className="btn-edit"
                variant="outline-success"
                onClick={() => {
                  console.log(Page.id);
                }}>
                 <Link to={`/Page/api/Pages/${Page.id}/`}>Edit Page</Link>
              </Button>{" "}
              <span className="never">allow only for Author</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Pagelist;
