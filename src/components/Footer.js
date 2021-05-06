import React from 'react'
import './footer.css'

import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
export default function Footer({ data }) {

    let filteredData = data.slice(0, 2);
    return (
        <div className="footer">
            <div className="container">

                <div className="row">
                    <div className="col-lg-3 text-left">
                        <div className="readIt-link mb-2">
                            <Link className="navbar-brand read" to="/" >Read<span className="it">Me</span>.</Link>
                        </div>
                        <div className="footer-excerpt">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                        </div>
                        <Fade bottom>
                            <div className="social-links">
                                <ul>
                                    <li className="social-icons-footer">
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-facebook" style={{ color: '#fff', fontSize: '20px' }}></i>
                                        </a>
                                    </li>
                                    <li className="social-icons-footer">
                                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-twitter" style={{ color: '#fff', fontSize: '20px' }}></i>
                                        </a>
                                    </li>
                                    <li className="social-icons-footer">
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-instagram" style={{ color: '#fff', fontSize: '20px' }}></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-3 text-left">
                        <div className=" latest-news">
                            <h5 className="footer-margin-bottom">Latest News</h5>
                            {filteredData.map((d, index) => (
                                <div className="row mb-5 text-left" key={index}>
                                    <div className="col-lg-5">

                                        <img src={`/images/${d.image.split('/').pop()}`} alt=""
                                            className="img-fluid" />

                                    </div>
                                    <div className="col-lg-7">
                                        <div className="footerTitleContent">
                                            <a href={`/SingleBlog/${d.title.replace(/\s+/g, '-').toLowerCase()}/${d.id}`}>
                                                <h6>{d.title}</h6>
                                            </a>
                                            <p style={{ color: "#ccc", fontSize: '13px' }}>{d.date}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>

                    </div>
                    <div className="col-lg-3 text-left">
                        <div className="information ">
                            <h5 className="footer-margin-bottom">Information</h5>
                            <ul>
                                <li className="mb-3">
                                    <i className="fa fa-angle-right"></i>
                                    <Link className="infoLink fontNormal" to="/">Home </Link>
                                </li>
                                <li className="mb-3">
                                    <i className="fa fa-angle-right"></i>
                                    <Link className="infoLink fontNormal" to="/articles">Articles </Link>
                                </li>
                                <li className="mb-3">
                                    <i className="fa fa-angle-right"></i>
                                    <Link className="infoLink fontNormal" to="/team">Team </Link>
                                </li>
                                <li className="mb-3">
                                    <i className="fa fa-angle-right"></i>
                                    <Link className="infoLink fontNormal" to="/contact">Contact </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 text-left">
                        <div className="faq ">
                            <h5 className="footer-margin-bottom">
                                Have Questions?
                            </h5>
                            <ul>
                                <li className="mb-3">
                                    <i className="fa fa-map-marker  faWidth"></i>
                                    <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                                </li>
                                <li className="mb-3">
                                    <i className="fa fa-phone faWidth"></i>
                                    <span>	+2 392 3929 210 </span>
                                </li>
                                <li className="mb-3">
                                    <i className="fa fa-envelope faWidth"></i>
                                    <span>info@yourdomain.com </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="copyright">

                        <p>Copyright © 2020 All rights reserved | Made with <span style={{ color: 'red', fontSize: '18px' }}>♥</span> by <a href="https://github.com/Vincaliber/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff' }}>Dante</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}