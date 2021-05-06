import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './hero.css'
export default class Default extends Component {
    render() {
        return (
            <div className="default" >
                <div className="hero-wrap">
                    <div className="overlay">
                        <div className="container">
                            <div className="row hero-content-center">
                                <div className="col-lg-12">
                                    <h1 className="readit-blog text-center">
                                        404
                                        </h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', padding: '100px' }}>

                    <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">Return To Home</Link>
                </div>
            </div>
        )
    }
}
