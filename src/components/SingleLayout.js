import React from "react"
import { Link } from 'gatsby'
import logo from "../images/icon.png"


const SingleLayout = ({ children }) => {
    return (
        <>
        <Header></Header>
            <div className="root-wrapper">
            <div className="container">
                {children}
            </div>
        <Footer></Footer>
        </div>
        </>
    )
}

const Footer = () =>{
    return (
        <footer className="footer">
            &copy; Copyright 2022
        </footer>
    )
}

const Header = () =>{
    
    return (
        <header className="header">
            <Link to="/"><img src={logo} alt=" | Movie Review Website" width="50px" />
</Link>
            <ul>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/all-reviews/">Reviews</Link></li>
            </ul>
        </header>
    )
}


export default SingleLayout 