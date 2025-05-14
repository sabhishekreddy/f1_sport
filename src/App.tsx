import { Link } from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/contact">Contact</Link>
      <Link to="/mission">Mission</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/API">API's</Link>
    </div>
  );
}

export default App;