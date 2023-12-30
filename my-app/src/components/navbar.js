import { useRef } from "react";
import React from "react";
import {FaApple, FaBars, FaTiles, FaTimes} from "react-icons/fa";
import "../styles/main.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>

            <a href="">Home</a>
            <a href="">Categories</a>
            <a href="">Shop</a>
            <a href="">About us</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>

            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;
