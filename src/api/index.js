import axios from "axios";

// index from api folder

const url ='https://memories-my-mern-project.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);  // get all posts

export const createPost = (newPost) => axios.post(url , newPost);  // add new post

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);  // update post 

export const deletePost = (id) => axios.delete(`${url}/${id}`);  // delete post 

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);  // add like to post