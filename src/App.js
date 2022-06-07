import NavBar from "./Component/NavBar/NavBar";
import RedditCard from "./Component/Card/RedditCard";
import OnePost from "./Component/OnePost/OnePost";
import Comments from "./Component/Comments/Comments";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import {  getAllPosts } from "./Api";
import { useState, useEffect } from "react";

function App() {
  
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await getAllPosts()
    setPosts(res.data)
  }

  useEffect(()=>{
    fetchPosts()
  },[])

  console.log({ posts });

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/postdetails/:id" element={<PostDetails posts={posts} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
