import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Booklist.css";
import Navbar from "../../HomePage/Navbar/Navbar";

function PageList() {
  const [page, setPages] = useState([]);
  const isAuthenticated = localStorage.getItem("jwtToken");
  // console.log("isAuthenticated", isAuthenticated);
  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/pagesList/"
        );
        setPages(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchPages();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1>Docpert Book App</h1>
        <h2>Our Books, Our Library</h2>
        {page.length === 0 ? (
          <p>No Pages available.</p>
        ) : (
          <ul>
            {page.map((page) => (
              <li key={page.id}>
                <p>
                  <span>Title</span>: {page.book}
                </p>
                <p>
                  <span>Number Of Pages</span>: {page.page_number}
                </p>
                <p>
                  <span>The Content</span>:{" "}
                  {page.content}
                </p>
                <Link to={`/book/editPage/${page.id}`}>
                  {isAuthenticated ? (
                    <Button className="btn-edit" variant="outline-danger">
                      Edit Page
                      {/* <p>{isAuthenticated}</p> */}
                    </Button>
                  ) : (
                    <Button
                      className="btn-edit"
                      variant="outline-danger"
                      disabled
                    >
                      Edit Pages
                    </Button>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default PageList;
