import axios from "axios";

// const API = axios.create({ baseURL: "https://api.tawwr.com" });
const API = axios.create({ baseURL: "http://localhost:4545" });

// export const getPosts = () => API.get("posts");
// export const getPost = (id) => API.get(`/posts/${id}`);

export const addPost = (userId, title, body, tags) => API.post(`/post/${userId}`, title, body, tags);



export const getAllPosts = () =>  API.get("post");

export const getPost = (postId) => API.get(`/post/${postId}`);

export const addComment = (userId, postId, body) => API.post(`/comment/${userId}/${postId}`,body)