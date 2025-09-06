import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Головна</Link>
              </li>
              <li>
                <Link to="/about">Про нас</Link>
              </li>
              <li>
                <Link to="/contact">Контакти</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
