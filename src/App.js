import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/admin/DashboardPage";
import UserPage from "./pages/admin/UserPage";
import HomePage from "./pages/user/HomePage";
import CreatePostPage from "./pages/user/CreatePostPage";
import PostPage from "./pages/admin/PostPage";
import MentorshipRequestPage from "./pages/admin/MentorshipRequestPage";
import PostDetail from "./pages/user/PostDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/user" element={<UserPage />} />
        <Route path="/admin/post" element={<PostPage />} />
        <Route path="/admin/mentor_ship_request" element={<MentorshipRequestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
