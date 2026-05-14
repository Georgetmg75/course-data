import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-800 text-yellow-100 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-yellow-200">Course Data App</Link>
        <div className="space-x-4">
          <Link to="/" className="text-yellow-100 hover:text-yellow-300">Courses</Link>
          <Link to="/about" className="text-yellow-100 hover:text-yellow-300">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;