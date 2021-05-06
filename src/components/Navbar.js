import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop])
    return (
        <nav className="navbar navbar-expand-lg  nav container-fluid" style={{ backgroundColor: scrollTop > 10 ? '#fff' : 'transparent' }}>
            <div className="container">
                <Link className="navbar-brand readWhite" to="/" style={{ display: scrollTop > 10 ? 'none' : 'block' }}>Read<span className="it">Me</span>.</Link>
                <Link className="navbar-brand readBlack" to="/" style={{ display: scrollTop > 10 ? 'block' : 'none' }}>Read<span className="it">Me</span>.</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "> <FontAwesomeIcon icon={faHamburger} /> </span>

                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link fontNormal" to="/" style={{ color: scrollTop > 10 ? 'rgba(0,0,0,0.8)' : '#fff' }}>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fontNormal" to="/Articles" style={{ color: scrollTop > 10 ? 'rgba(0,0,0,0.8)' : '#fff' }}>Articles </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fontNormal" to="/Team" style={{ color: scrollTop > 10 ? 'rgba(0,0,0,0.8)' : '#fff' }}>Team </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fontNormal" to="/Contact" style={{ color: scrollTop > 10 ? 'rgba(0,0,0,0.8)' : '#fff' }}>Contact </Link>
                        </li>
                    </ul>

                </div>
            </div>

        </nav>

    )
}