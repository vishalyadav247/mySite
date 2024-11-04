import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Projects from '../pages/projects';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AuthGuard from "../authentication/userProtected";
import AllRooms from "../components/pgComponents/allRooms";
import AllGuest from "../components/pgComponents/allGuest";
import RoomDetails from "../components/pgComponents/roomDetails";
import AddRoom from "../components/pgComponents/addRoom";
import Checkin from "../components/pgComponents/checkin";

const Blogs = lazy(() => import('../pages/blogs'));
const SinglePost = lazy(() => import('../pages/SinglePost'));
const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const Pg = lazy(() => import('../pages/pg'));

// Layout component for common header and footer
const Layout = ({ children }) => (
    <>
        <AppHeader />
        {children}
        <AppFooter />
    </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: "about",
        element: (
            <Layout>
                <About />
            </Layout>
        ),
    },
    {
        path: "contact",
        element: (
            <Layout>
                <Contact />
            </Layout>
        ),
    },
    {
        path: "projects",
        element: (
            <Layout>
                <Projects />
            </Layout>
        ),
    },
    {
        path: "blogs",
        element: (
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Blogs />
                </Suspense>
            </Layout>
        ),
    },
    {
        path: "categories/:categoryName",
        element: (
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Blogs />
                </Suspense>
            </Layout>
        ),
    },
    {
        path: "posts/:slug",
        element: (
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <SinglePost />
                </Suspense>
            </Layout>
        ),
    },
    {
        path: "login",  // No header or footer on the login page
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: "register",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Register />
            </Suspense>
        ),
    },
    {
        path: "/pg",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <AuthGuard>
                    <Pg />
                </AuthGuard>
            </Suspense>
        ),
        children: [
            {
                index: true,
                element: <AllRooms />,
            },
            {
                path: "/pg/allRooms",
                element: <AllRooms />,
            },
            {
                path: "/pg/allGuests",
                element: <AllGuest />,
            },
            {
                path: "/pg/allRooms/:roomName",
                element: <RoomDetails />,
            },
            {
                path: "/pg/add-room",
                element: <AddRoom />,
            },
            {
                path: "/pg/checkin/:roomName",
                element: <Checkin />,
            }
        ]
    },
]);

export { router };
