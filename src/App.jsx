import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/src/Home';
import Menu from '/src/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
