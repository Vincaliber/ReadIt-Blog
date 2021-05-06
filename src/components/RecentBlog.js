import React, { useState } from 'react'
import './RecentBlog.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
export default function RecentBlog(props) {
    // console.log(props);
    //const [search, setSearch] = useState('')
    let filteredData = props.blogPosts.slice(0, 4);
    //let searchResults = search.length === 0 ? filteredData : filteredData.filter(fd => fd.title.toLowerCase().indexOf(search.toLowerCase()) > -1);
    // const searchbar = {
    //     maxWidth: '57%', border: 'none', outline: 'none', borderBottom: '1px solid #ccc', fontSize: '1.5em'
    // }

    return (
        <div className="recentBlog" id="recentBlog">
            <div className="container">
                {/* <div className="row">
                    <form className=" w-100 " >
                        <div className="input-group mb-5">
                            <input type="text" placeholder="Search for Posts" id="searchPosts" className="form-control " style={searchbar} value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </form>
                </div> */}
                <div className="row">
                    {filteredData.map((d, index) => (
                        <div className="row mb-5 text-left recentBlogRow" key={index}>
                            <div className="col-lg-7">
                                <div className="recentBlogDiv">

                                    <img src={`/images/${d.image.split('/').pop()}`} alt="" className="img-fluid recentBlog-img " />
                                </div>

                            </div>
                            <div className="col-lg-5">

                                <div className="blogTitleContent">
                                    <p style={{ textTransform: 'uppercase', color: '#ccc' }}>{d.category}</p>
                                    <Link to={`/SingleBlog/${d.title.replace(/\s+/g, '-').toLowerCase()}/${d.id}`}>
                                        <h1>{d.title}</h1>
                                    </Link>
                                    <Fade bottom>
                                        <ul>
                                            <li className="social-icons">
                                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa fa-facebook" style={{ color: '#000' }}></i>
                                                </a>
                                            </li>
                                            <li className="social-icons">
                                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa fa-twitter" style={{ color: '#000' }}></i>
                                                </a>
                                            </li>
                                            <li className="social-icons">
                                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa fa-instagram" style={{ color: '#000' }}></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </Fade>
                                    <p className="recentBlog-date">{d.date}</p>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}
