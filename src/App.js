import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
