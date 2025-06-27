// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home-Page'; //✅ Don't include `./src/` in the path — React already starts from the `src` folder.
import ResultPage from './pages/Result-Page'; //✅ Don't include `./src/` in the path — React already starts from the `src` folder.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
