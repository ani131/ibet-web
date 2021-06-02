import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The MENTALIST</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/scoring">Scoring</Link>
        <Link to="/quiz">Take the Quiz!</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;