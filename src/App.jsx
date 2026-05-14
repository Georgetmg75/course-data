import Navbar from './components/Navbar.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
