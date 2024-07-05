import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
