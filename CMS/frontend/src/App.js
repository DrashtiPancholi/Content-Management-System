import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
