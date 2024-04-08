import React from 'react';
import ReactDOM from 'react-dom/client'
import conf from './conf/conf';
import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/appStore';
import Main from './Main';
import Home from './pages/Home';
import AuthLayout from './components/AuthLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Post from './pages/Post';
import EditPost from './pages/EditPost';
import CreatePost from './pages/CreatePost';
import FetchPosts from './pages/FetchPosts';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>

            },
            {
                path:"/login",
                element:(
                    <AuthLayout authentication={false}>
                        <Login/>
                    </AuthLayout>
                )
            },
            {
                path:"/signup",
                element:(
                    <AuthLayout authentication={false}>
                        <SignUp/>
                    </AuthLayout>
                )
            },
            {
                path: "/all-posts",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <FetchPosts />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <CreatePost />
                    </AuthLayout>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.Fragment>
        <Provider store={store}>
        <RouterProvider router={router}>
        <h1>{conf.appwriteUrl}</h1>
        </RouterProvider>
        </Provider>
    </React.Fragment>
)