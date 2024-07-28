import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Register from './pages/Register/Register';
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <Router>

      <div className="global-container">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
