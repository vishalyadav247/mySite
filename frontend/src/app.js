import React, { useEffect, useState, createContext } from 'react';
import { router } from './routes/appRoutes.js'
import { RouterProvider } from "react-router-dom";
import axios from 'axios';
import RoomProvider from './useContext/roomContext.js';

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
                    const posts = [...arr, ...arr];
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
            Promise.all([p1, p2]).then((values) => {
                setData(values[0]);
                setCategories(values[1]);
                // setPopularPost(values[2]);
            })
        }
        my()
    }, [])

    return (
        <>
            <blogData.Provider value={data}>
                <blogCategories.Provider value={categories}>
                    <popularBlogPosts.Provider value={popularPost}>
                        <RoomProvider>
                            <RouterProvider router={router} />
                        </RoomProvider>
                    </popularBlogPosts.Provider>
                </blogCategories.Provider>
            </blogData.Provider >
        </>
    )
}

export { blogData, blogCategories, popularBlogPosts }; 