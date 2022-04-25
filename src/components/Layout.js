import React from "react"

const Layout = ({ children }) => {
    return (
        <div className="root-wrapper">
        <div className="container">
            {children}
        </div>
        <Footer></Footer>
        </div>
    )
}

const Footer = () =>{
    return (
        <footer className="footer">
            &copy; Copyright 2022
        </footer>
    )
}

export default Layout 