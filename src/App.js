import './App.css';
import Books from './pages/Books';
import Bookshops from './pages/Bookshops';
import Book from './pages/Book';
import UserBooks from './pages/UserBooks';
import Header from './components/Header';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path = '/' element = {<Navigate to="/books" replace />} />
        <Route path = '/books' element = {<Books />} />
        <Route path = '/mybooks' element = {<UserBooks />} />
        <Route path = '/bookshops' element = {<Bookshops />} />
        <Route path = '/books/:ISBN' element = {<Book />} />
      </Routes>
    </div>
  );
}

export default App;
