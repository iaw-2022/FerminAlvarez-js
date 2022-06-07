import './App.css';
import Books from './pages/Books';
import Bookshops from './pages/Bookshops';
import Book from './pages/Book';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Navigate to="/books" replace />} />
        <Route path = '/books' element = {<Books />} />
        <Route path = '/bookshops' element = {<Bookshops />} />
        <Route path = '/books/:ISBN' element = {<Book />} />
      </Routes>
    </div>
  );
}

export default App;
