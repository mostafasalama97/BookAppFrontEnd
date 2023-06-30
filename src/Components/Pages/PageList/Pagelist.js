import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navbar from "../../HomePage/Navbar/Navbar";
import "./Pagelist.css";

function PageList() {
  const { pageId } = useParams();
  const [page, setPage] = useState(null);
  const isAuthenticated = localStorage.getItem("jwtToken");

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/book/api/pages/${pageId}/`);
        setPage(response.data);
      } catch (error) {
        console.error("Error fetching page:", error);
      }
    };

    fetchPage();
  }, [pageId]);

  return (
    <>
      <Navbar />
      <div className="page-list-container">
        <h1>Docpert Book App</h1>
        <h2>Our Books, Our Library</h2>
        {page ? (
          <div>
            <p>
              <span>Title</span>: {page.book}
            </p>
            <p>
              <span>Number Of Pages</span>: {page.page_number}
            </p>
            <p>
              <span>The Content</span>: {page.content}
            </p>
            <Link to={`/book/pageEdit/${page.id}`}>
              {isAuthenticated ? (
                <Button className="btn-edit" variant="outline-danger">
                  Edit Page
                </Button>
              ) : (
                <Button className="btn-edit" variant="outline-danger" disabled>
                  Edit Pages
                </Button>
              )}
            </Link>
          </div>
        ) : (
          <p>No Page available.</p>
        )}
      </div>
    </>
  );
}

export default PageList;
