import React from "react";
import  ReactDOM, {createRoot}  from "react-dom/client";
import './index.css'
import Header from './src/components/Header'
import Body from "./src/components/Body";
import Footer from './src/components/Footer';
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./src/Utils/store";
import Cart from "./src/components/Cart";



const AppLayOut = () => {
    return (
        <Provider store={store}>
        
        <Header/>
        <Outlet/>
        <Footer/>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOut/>,
        errorElement : <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
        ]
    },
   
])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

