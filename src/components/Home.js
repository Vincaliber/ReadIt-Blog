import React, { Component } from 'react'
import './hero.css';

import RecentBlog from './RecentBlog';

import BreadCrumb from './BreadCrumb';
import { data } from './Data'

import Fade from 'react-reveal/Fade';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogPosts: data

        }


    }


    // "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=Rgqqjchx3UJk1oUnFwDH6tr6zQDVj7tV"
    render() {
        // fetch(
        //     "https://api.themoviedb.org/3/discover/movie?api_key=481c967c4a7bbdd6cdf43e6eb5abb239&primary_release_year=2020&language=en"

        // )
        //     .then(res => res.json())
        //     .then(function (data) {
        //         console.log(data);
        //     })
        //     .catch(function (err) {
        //         console.log(err);
        //     });
        return (

            <div>

                <div className="hero-wrap">
                    <div className="overlay">
                        <div className="container">
                            <div className="row hero-content-center">
                                <div className="col-lg-12">
                                    <BreadCrumb />
                                    <Fade bottom>
                                        <h2 className="subheading">
                                            Hello! Welcome to
                                </h2>
                                        <h1 className="readit-blog">
                                            ReadMe
                                </h1>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="text">
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                    <div className="mouse">

                                                        <div className="mouse-wheel">
                                                            <i className="fa fa-long-arrow-down down-arrow" id="down-arrow"></i>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RecentBlog blogPosts={this.state.blogPosts} />

            </div>
        )
    }
}

