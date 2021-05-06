import React, { Component } from "react";
import Slider from "react-slick";
import './SimpleSlider.css'
import managerImg1 from '../images/person_1.jpg'
import managerImg2 from '../images/person_2.jpg'
import managerImg3 from '../images/person_3.jpg'
import managerImg4 from '../images/person_4.jpg'
import managerImg5 from '../images/person_5.jpg'
import managerImg6 from '../images/person_6.jpg'
import Fade from 'react-reveal/Fade';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const managerImgStyle = {
            borderRadius: '50%',
            height: '100px',
            width: '100px'
        }
        return (
            <Fade bottom>
                <div className="pt100 pb100 w-100 text-center">

                    <p className="greyFont">Testimonial</p>
                    <h2 className="font-weight-bold">Happy Clients </h2>
                    <div className="slider pt100">
                        <Slider {...settings}>
                            <div >
                                <div className="row text-left">
                                    <div className="col-lg-12 ">
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>

                                <div className="row  pt-3">
                                    <div className="col-lg-4">
                                        <div className="managerImage">
                                            <img src={managerImg1} alt="" className="img-fluid" style={managerImgStyle} />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="roger-content">
                                            <h4>Ron Wandon</h4>
                                            <p>Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row text-left">
                                    <div className="col-lg-12 ">
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>

                                <div className="row  pt-3">
                                    <div className="col-lg-4">
                                        <div className="managerImage">
                                            <img src={managerImg2} alt="" className="img-fluid" style={managerImgStyle} />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="roger-content">
                                            <h4>Dwayne Johnson</h4>
                                            <p>Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row text-left">
                                    <div className="col-lg-12 ">
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>

                                <div className="row  pt-3">
                                    <div className="col-lg-4">
                                        <div className="managerImage">
                                            <img src={managerImg3} alt="" className="img-fluid" style={managerImgStyle} />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="roger-content">
                                            <h4>Paul Walker</h4>
                                            <p>Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row text-left">
                                    <div className="col-lg-12 ">
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>

                                <div className="row  pt-3">
                                    <div className="col-lg-4">
                                        <div className="managerImage">
                                            <img src={managerImg4} alt="" className="img-fluid" style={managerImgStyle} />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="roger-content">
                                            <h4>Vin Diesel</h4>
                                            <p>Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row text-left">
                                    <div className="col-lg-12 ">
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>

                                <div className="row  pt-3">
                                    <div className="col-lg-4">
                                        <div className="managerImage">
                                            <img src={managerImg5} alt="" className="img-fluid" style={managerImgStyle} />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="roger-content">
                                            <h4>Davis Matt</h4>
                                            <p>Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row text-left">
                                    <div className="col-lg-12 ">
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>

                                <div className="row  pt-3">
                                    <div className="col-lg-4">
                                        <div className="managerImage">
                                            <img src={managerImg6} alt="" className="img-fluid" style={managerImgStyle} />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="roger-content">
                                            <h4>Daisy Scott</h4>
                                            <p>Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Slider>
                    </div>



                </div>
            </Fade>

        );
    }
}