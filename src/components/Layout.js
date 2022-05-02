import React from "react"
import { Link } from 'gatsby'
import logo from "../images/icon.png"

const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            <div className="root-wrapper">
            <div className="container">
                <div className="row">
                    <div className="flex-70">
                    {children}
                    </div>
                    <div className="flex-30">

                        <div className="sidebar-section">
                            <div className="sidebar-title">Upcoming Reviews</div>
                            <ul>
                                <li>
                                    <b>Heartstopper</b>
                                    <span>Released: April 22, 2022</span>
                                </li>
                                <li>
                                    <b>Metal Lords</b>
                                    <span>Released: April 8, 2022</span>
                                </li>
                            </ul>
                        </div>    

                    </div>
                </div>
            </div>
            <Footer></Footer>
            </div>
        </>
    )
}

const Footer = () =>{
    return (
        <footer className="footer">
            &copy; Copyright 2022 Loner Reviews
        </footer>
    )
}
const Header = () =>{
    
    return (

        <header className="header">
            <Link to="/"><img src={logo} alt="Loner Reviews | Movie Review Website" width="50px" />
</Link>
            <ul>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/all-reviews/">Reviews</Link></li>
            </ul>
        </header>

    )
}

export default Layout 