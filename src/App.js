import './App.css';
import BookEdit from './Components/Books/BookEdit/BookEdit';
// import Booklist from './Components/Books/BookList/Booklist';
// import { BrowserRouter as Routes , Route , NavLink } from 'react-router-dom';

// import Login from './Components/Auth/login/Login';
// import Register from './Components/Auth/Register/Register';
// import HomePage from './Components/HomePage/HomePage'
function App() {
//   return (
//    <>
//  {/* <HomePage /> */}
// {/* <Register /> */}
// {/* <Login /> */}
// <Booklist />
//    </>
//   );
// }

return (
 <>
 {/* <Routes>
 <Route path="/" element={<HomePage />} />
 <Route path="/BookList" element={<Booklist />} />
 <Route path="/" element={<BookEdit />} />
 </Routes> */}
 {/* <HomePage /> */}
 <BookEdit />
 </>
);
};

export default App;
