import React, { useState } from 'react'
import BreadCrumb from './BreadCrumb';
import { Link } from 'react-router-dom';
import './hero.css'
import './Articles.css'
import { data } from './Data';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import LazyLoad from 'react-lazy-load';

export default function Articles(props) {
    // console.log(props);


    const searchedCategory = props.location.search.indexOf('category') > -1 && props.location.search.split('=')[1];
    const searchedTags = props.location.search.indexOf('tags') > -1 && props.location.search.split('=')[1];
    const filteredData = searchedCategory ? data.filter(d => d.category.indexOf(searchedCategory) > -1) : data.filter(d => d.tags.indexOf(searchedTags) > -1);

    const [search, setSearch] = useState('');
    let searchResults;
    // let searchResults = (search.length === 0 && filteredData.length === 0) ? data :
    //     (filteredData.length >= 0 ? filteredData.filter(fd => fd.title.toLowerCase().indexOf(search.toLowerCase()) > -1) :
    //         data.filter(d => d.title.toLowerCase().indexOf(search.toLowerCase()) > -1));

    if (search.length === 0 && filteredData.length === 0) {
        searchResults = data;
    } else if (search.length !== 0 && filteredData.length === 0) {
        searchResults = data.filter(fd => fd.title.toLowerCase().indexOf(search.toLowerCase()) > -1);
    } else if (search.length !== 0 && filteredData.length !== 0) {
        searchResults = filteredData.filter(fd => fd.title.toLowerCase().indexOf(search.toLowerCase()) > -1);
    } else {
        searchResults = filteredData;
    }

    console.log(data);

    const searchbar = {
        border: 'none', outline: 'none', borderBottom: '1px solid #ccc', fontSize: '1.2em', boxShadow: 'none'
    }

    const form = {
        maxWidth: '50%',
        margin: '0 15px'
    }
    //console.log(search.length, searchResults, filteredData);

    // let res, total = [];
    // let postsPerPage = 6;
    // const numPages = Math.max(1, Math.ceil(searchResults.length / postsPerPage));
    // for (let i = 0; i < numPages; i++) {
    //     res = searchResults.slice(i * postsPerPage, (i + 1) * postsPerPage);
    //     total.push(res)
    // }
    // console.log(res);
    return (
        <div>

            <div className="hero-wrap">
                <div className="overlay">
                    <div className="container">
                        <div className="row hero-content-center">
                            <div className="col-lg-12">
                                <Fade bottom>
                                    <h1 className="readit-blog text-center">
                                        Articles
                                </h1>
                                </Fade>
                                <BreadCrumb />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="blog-lists p-70">
                    <div className="row">
                        <form className=" w-100 " style={form} >
                            <div className="input-group mb-5">
                                <input type="text" placeholder="Search for Articles" id="searchPosts" className="form-control " style={searchbar} value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        {

                            searchResults.map((fd, index) => (

                                <div className="col-lg-4 mb-30" key={index}>

                                    <LazyLoad offsetTop={1000}>
                                        <div className="singleArticle">
                                            <div className="img">
                                                <img src={`/images/${fd.image.split('/').pop()}`} alt="" className="img-fluid article-img" />
                                            </div>
                                            <div className="articleContent">
                                                <div className="row mb-15 ">
                                                    <div className="col-lg-6">
                                                        <p style={{ textTransform: 'uppercase', color: '#ccc' }}>{fd.category}</p>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <p className="article-date">{fd.date}</p>
                                                    </div>
                                                </div>

                                                <Link to={`/SingleBlog/${fd.title.replace(/\s+/g, '-').toLowerCase()}/${fd.id}`}>
                                                    <h3>{fd.title}</h3>
                                                </Link>

                                                <p style={{ textTransform: 'capitalize', color: 'grey', fontSize: '14px' }} className="mb-30">{fd.content.substring(0, 150) + '...'}</p>
                                                <p style={{ fontSize: '12px', position: 'absolute', bottom: '0' }}>
                                                    <Link to={`/SingleBlog/${fd.title.replace(/\s+/g, '-').toLowerCase()}/${fd.id}`}>
                                                        <FontAwesomeIcon icon={faAngleRight} /> READ MORE
                                                        </Link>
                                                </p>

                                            </div>
                                        </div>
                                    </LazyLoad>
                                    <div className="filler" />

                                </div>


                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
