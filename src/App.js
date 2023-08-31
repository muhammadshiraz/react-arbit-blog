import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Header from 'components/Header';
import PostList from 'components/Post/PostList';
import PostDetail from 'components/Post/PostDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />        
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
