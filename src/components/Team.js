import React from 'react'
import { useState } from 'react'
import teamImg from '../images/about.jpg'
import './hero.css'
import './Team.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import SimpleSlider from '../components/SimpleSlider'
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
export default function Team() {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };



    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>

            <div className="hero-wrap">
                <div className="overlay">
                    <div className="container">
                        <div className="row hero-content-center">
                            <div className="col-lg-12">
                                <Fade bottom>
                                    <h1 className="readit-blog text-center">
                                        Team
                                    </h1>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row team-info ">

                    <div className="col-lg-6 ">
                        <div className="team-info-img">
                            <img src={teamImg} alt="about" className="img-fluid" />
                            <div className="play-icon-div" >
                                <FontAwesomeIcon icon={faPlay} className="playIcon" onClick={openModal} />


                            </div>

                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Fade bottom>
                            <div className="aboutContent pl-5 pt-5 pb-5">
                                <p className='greyFont'>Welcome to Readit </p>
                                <h2 style={{ fontWeight: 'bold' }}>We give you the best articles you want.</h2>
                                <p className="mt-4 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                <Tabs defaultActiveKey="home" style={{ position: 'relative' }}>
                                    <Tab eventKey="home" title="Our Mission">
                                        <div className="tabContent rounded bg-light mt-4 p-3">

                                            <p className='greyFont'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title="Our Vision">
                                        <div className="tabContent rounded bg-light mt-4 p-3">

                                            <p className='greyFont'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="contact" title="Our Values" >
                                        <div className="tabContent rounded bg-light mt-4 p-3">

                                            <p className='greyFont'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </Tab>
                                </Tabs>

                            </div>
                        </Fade>
                    </div>

                </div>

            </div>

            <div className="container">
                <div className="row team-slider ">
                    <SimpleSlider />
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <iframe class="mfp-iframe" src="//player.vimeo.com/video/45830194?autoplay=1" frameborder="0" allowfullscreen="" width="900" height="500"></iframe>
            </Modal>

        </div>
    )
}
