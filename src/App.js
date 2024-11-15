import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PostDetail from './PostDetail';
import Category from './Category';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
