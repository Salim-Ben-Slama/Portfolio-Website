import "./App.css"
import Cv from "./pages/cv.jsx";
import Navbar from "./components/shared/navbar.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div /*style={{padding:"0 80px"}}*/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cv/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
