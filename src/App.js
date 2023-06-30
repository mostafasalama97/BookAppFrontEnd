import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Auth/login/Login'
import Register from './Components/Auth/Register/Register'
import Booklist from './Components/Books/BookList/Booklist';
import BookEdit from './Components/Books/BookEdit/BookEdit';
import PageList from './Components/Pages/PageList/Pagelist';
import PageEdit from './Components/Pages/PageEdit/PageEdit';
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Booklist" element={<Booklist />} />
        <Route path="/BookEdit" element={<BookEdit />} />
        <Route path="/book/edit/:bookId" element={<BookEdit />} />
        <Route path="/book/read/:pageId" element={<PageList />} />
        <Route path="/book/pageEdit/:pageId" element={<PageEdit />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

