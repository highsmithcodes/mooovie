import React from "react"

const Layout = ({ children }) => {
    return (
        <div className="container">
            {children}
            <Footer></Footer>
        </div>
    )
}

const Footer = () =>{
    return (
        <footer>
            &copy; Copyright 2022
        </footer>
    )
}

export default Layout 