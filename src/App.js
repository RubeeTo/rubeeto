// import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projetcs from './pages/ProjetcsPage';

function App() {
  return (
    <Router basename="/rubeeto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetcs/:slug" element={<Projetcs/>} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;