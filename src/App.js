import './App.css';
import Books from './pages/Books';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/books' element = {<Books />} />
      </Routes>
    </div>
  );
}

export default App;
