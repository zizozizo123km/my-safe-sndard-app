import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import './index.css'; // Ensure global styles are imported

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Header will handle navigation and context like search */}
        <Header />

        <main className="pt-20"> {/* Offset for fixed header */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Future routes like details, search results, etc. */}
            {/* <Route path="/movie/:id" element={<MovieDetailPage />} /> */}
          </Routes>
        </main>

        {/* Optional: Footer component */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;