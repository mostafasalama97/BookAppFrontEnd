import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookEdit.css";
import Navbar from "../../HomePage/Navbar/Navbar";

const PageEdit = () => {
  const { pageId } = useParams();
  const [page, setPages] = useState([]);
  const [success, setSuccess] = useState("");
  const [delSuccess, setDelSuccess] = useState("");
  const [PageData, setPageData] = useState({
    page_number: "",
    content: "",
  });

  useEffect(() => {
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
      .get(`http://localhost:8000/book/api/pages/${pageId}/`, { headers })
      .then((response) => {
        setPages(response.data);
        setPageData({
          author: response.data.author,
          title: response.data.title,
          description: response.data.description,
          published_date: new Date(response.data.published_date),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pageId]);

  const handleChange = (event) => {
    setPageData({ ...PageData, [event.target.name]: event.target.value });
  };
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
      .put(`http://localhost:8000/book/api/pages/${pageId}/`, PageData, {
        headers,
      })
      .then((response) => {
        console.log("Page updated successfully!");
        setSuccess("Updated successfully!");
      })
      .catch((error) => {
        console.error(error);
        setSuccess("Update failed!");
      });
  };
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
      .delete(`http://localhost:8000/book/api/pages/${pageId}/`, { headers })
      .then((response) => {
        console.log("page deleted successfully!");
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
        <h2>Edit Page where ID = {pageId}</h2>
        <form>
          <h3>Edit Page</h3>
          <div>
            <label htmlFor="PageNumber">Page Number</label>
            <input
               type="number"
               name="page_number"
               value={PageData.page_number}
               onChange={handleChange}
               required
            />
          </div>
          <div>
            <label htmlFor="description">Content</label>
            <input
             type="text"
             rows={3}
             name="content"
             value={PageData.content}
             onChange={handleChange}
             required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Update
          </button>
          {success && <p>{success}</p>}
        </form>
        <form className="form-control">
          <h3>Delete Page</h3>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleDeleteBtn}
          >
            Delete
          </button>
          {delSuccess && <p>{delSuccess}</p>}
        </form>
      </div>
    </>
  );
};

export default PageEdit;
