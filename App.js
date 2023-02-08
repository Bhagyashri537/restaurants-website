import React from "react";
import  ReactDOM, {createRoot}  from "react-dom/client";
import './index.css'
import Header from './src/components/Header'
import Body from "./src/components/Body";
import Footer from './src/components/Footer';


const AppLayOut = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayOut/>)

