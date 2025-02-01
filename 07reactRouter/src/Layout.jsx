import React from "react";
import Header from "./componants/Header/Header.jsx";
import Footer from "./componants/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout