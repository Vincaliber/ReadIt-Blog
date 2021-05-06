import React, { Component } from 'react'
import { data } from './Data'
import { Link } from 'react-router-dom'
import './hero.css'
import SideBar from './SideBar';
import FormComment from './FormComment';
import Fade from 'react-reveal/Fade';

export default class SingleBlog extends Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            blogData: data,
            id: + id,
            loading: false
        }
    }

    render() {
        let singleBlog = this.state.blogData.filter(d => d.id === this.state.id);
        let allTags = this.state.blogData.map(t => t.tags).join(',');
        allTags = Array.from(new Set(allTags.split(','))).toString();
        console.log(allTags);
        const { image, title, date, content, author, author_image, tags } = singleBlog[0] || '';
        const tagList = {
            display: 'inlineBlock',
            marginLeft: '15px',
            border: '1px solid grey',
            padding: '2px 12px',
            listStyle: 'none'
        }
        if (this.state.loading) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h2 className="text-uppercase text-orange text-center">loading Post...</h2>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="hero-wrap">
                        <div className="overlay">
                            <div className="container">
                                <div className="row hero-content-center">
                                    <div className="col-lg-12">
                                        <Fade bottom>
                                            <h1 className="readit-blog text-center">
                                                Blog Single
                                        </h1>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-10 mx-auto col-md-8 my-3">

                                <img src={image} alt="image" className="d-block w-100 mb-5" style={{ maxHeight: '35em' }} />
                                <h2 className="text-capitalize">{title}</h2>
                                {/* <h6 className="text-warning text-capitalize text-slanted">published on {date}</h6> */}
                                <p style={{ lineHeight: '2em' }}>{content}</p>
                                <p style={{ lineHeight: '2em' }}>{content}</p>
                                <p style={{ lineHeight: '2em' }}>{content}</p>
                                <div className="row mt-5">
                                    {
                                        tags.map((tag, index) => {
                                            return (
                                                <ul key={index}>
                                                    <li style={tagList}>
                                                        <Link to={`/Articles/all?tags=${tag}`} style={{
                                                            textDecoration: 'none',
                                                            color: '#000',
                                                            fontSize: '12px'
                                                        }}>{tag}</Link>
                                                    </li>
                                                </ul>
                                            )
                                        })
                                    }

                                </div>
                                <div className="row mt-5" style={{
                                    background: '#f8f9fa',
                                    padding: '25px'
                                }}>
                                    <div className="col-lg-4">
                                        <div className="authorImage">
                                            <img src={author_image} alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="authorName">
                                            <h3>{author}</h3>
                                        </div>
                                        <div className="authorContent">
                                            <p>{content}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <hr style={{ borderTop: '1px solid #ccc', width: '100%' }} />
                                </div>
                                <div className="row mt-5">
                                    <FormComment />
                                </div>
                            </div>
                            {/* info */}
                            <div className="col-10 mx-auto col-md-4 my-3">
                                <SideBar allTags={allTags} data={data} />

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
