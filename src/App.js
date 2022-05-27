import './App.css';
import Books from './pages/Books';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '*' element = {<Navigate to="/books" replace />} />
        <Route path = '/' element = {<Navigate to="/books" replace />} />
        <Route path = '/books' element = {<Books />} />
      </Routes>
    </div>
  );
}

export default App;
