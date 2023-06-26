// import React from 'react';
// import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
// import Login from '../../Auth/login/Login';
// import Register from '../../Auth/Register/Register';
// import BookEdit from '../../Books/BookEdit/BookEdit';
// import BookList from '../../Books/BookList/Booklist';
// import HomePage from '../HomePage';

// function Navbar() {
//   return (
//     <>
//       <h2>Vertical Tabs</h2>
//       <p>Click on the buttons inside the tabbed menu:</p>
//       <div className="tab">
//         <NavLink to="/home">Home</NavLink>
//         <br />
//         <NavLink to="/login">Login</NavLink>
//         <br />
//         <NavLink to="/register">Register</NavLink>
//         <br />
//         <NavLink to="/booklist">BookList</NavLink>
//         <br />
//         <NavLink to="/bookedit">BookEdit</NavLink>
//       </div>
//       <div className="tabcontent">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/booklist" element={<BookList />} />
//           <Route path="/bookedit" element={<BookEdit />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default Navbar;


import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <>
      <h2>Book App</h2>
      <div className="tab">
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/Login" activeClassName="active">
          Login
        </NavLink>
        <NavLink to="/Register" activeClassName="active">
          Register
        </NavLink>
        <NavLink to="/BookList" activeClassName="active">
          BookList
        </NavLink>
        <NavLink to="/BookEdit" activeClassName="active">
          BookEdit
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;

