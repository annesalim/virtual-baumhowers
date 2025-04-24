import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="bg-container">
      <h1>Baumhower's Virtual</h1>
      <p className="subheading">Experience the best virtual dining experience with us!</p>
      <Link to="/menu" className="menu-button">View Menu</Link>
    </div>
  );
}

export default Home;