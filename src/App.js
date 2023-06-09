import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import FullPost from "./components/posts/FullPost";
import FullAlbums from "./components/albums/FullAlbums";
import Profile from "./components/auth/Profile";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:param" element={<FullPost />} />
          <Route path="/album/:param" element={<FullAlbums />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
