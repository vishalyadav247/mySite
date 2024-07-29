import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Blogs from './pages/blogs';
import SinglePost from './pages/SinglePost';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useState, createContext, useEffect } from 'react';
import Login from './pages/login';
import Register from './pages/register';

const blogData = createContext(null);
const blogCategories = createContext(null);
const popularBlogPosts = createContext(null);
const apiUrl = process.env.REACT_APP_API_URL;

export default function App() {

    const [data, setData] = useState([]);   // All blogs data 
    const [categories, setCategories] = useState({});   // Categories list define by Admin
    const [popularPost, setPopularPost] = useState({});   // All popular post listed by using popular tag

    useEffect(() => {
        function my() {
            // Getting All post data
            const p1 = new Promise((resolve, reject) => {
                axios.get(`${apiUrl}/wp-json/wp/v2/posts?per_page=100`).then((response) => {
                    const arr = response.data
                    const posts = [...arr , ...arr];
                    resolve(posts)
                })
            });
            // Getting Post Caterories list
            const p2 = new Promise((resolve, reject) => {
                axios.get(`${apiUrl}/wp-json/wp/v2/categories`).then((response) => {
                    const cat = response.data;
                    const catList = {}
                    for (let b of cat) {
                        catList[b.id] = b.name;
                    }
                    resolve(catList)
                })
            })
            // Getting post by tag name (popular)
            const p3 = new Promise((resolve, reject) => {
                axios.get(`${apiUrl}/wp-json/wp/v2/tags`).then((response) => {
                    const tag = response.data;
                    const tagList = {};
                    let popPost = [];
                    for (let b of tag) {
                        tagList[b.id] = b.name;
                    }
                    console.log(tagList)
                    for (let b in tagList) {
                        if (tagList[b] === 'Popular') {
                            axios.get(`${apiUrl}/wp-json/wp/v2/posts?tags=${b}`).then((response) => {
                                const dat = response.data;
                                for (let i in dat) {
                                    popPost.push(dat[i])
                                }
                                resolve(popPost)
                            })
                            break
                        }
                    }

                })
            })
            Promise.all([p1, p2, p3]).then((values) => {
                console.log('val',values)
                setData(values[0]);
                setCategories(values[1]);
                setPopularPost(values[2]);
            });
        }
        my()
    }, [])

    return (
        <>
            <blogData.Provider value={data}>
                <blogCategories.Provider value={categories}>
                    <popularBlogPosts.Provider value={popularPost}>
                    <Routes>
                        {/* Navigtion Routes */}
                        <Route index path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="blogs" element={<Blogs />} />
                        {/* blog detail page route */}
                        <Route path="/posts/:slug" element={<SinglePost />} />
                        <Route path="/categories/:categoryName" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                    </popularBlogPosts.Provider>
                </blogCategories.Provider>
            </blogData.Provider >
        </>
    )
}

export { blogData, blogCategories, popularBlogPosts };