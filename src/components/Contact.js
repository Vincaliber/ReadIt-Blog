import React, { useState } from 'react'
import './hero.css'
import Fade from 'react-reveal/Fade';
export default function Contact() {
    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [website, setwebsite] = useState('')
    const [textarea, settextarea] = useState('')
    const inputHeight = {
        height: '50px',
        textIndent: '10px'
    }
    const thankYou = document.getElementById('thankYou');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== '' && email !== '' && website !== '') {
            thankYou.style.display = 'block';
            setTimeout(() => {
                thankYou.style.display = 'none';
            }, 1000);
        }
        setName('');
        setemail('');
        setwebsite('');
        settextarea('');
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
                                        Contact
                                    </h1>
                                </Fade>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-info pt100">
                            <h2>Contact Information</h2>
                            <div className="row mt-5">
                                <div className="col-lg-3">
                                    <div className="address">
                                        <p>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="phone">
                                        <p>Phone: + 1235 2355 98</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="email">
                                        <p>Email: info@yoursite.com</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="website">
                                        <p>Website yoursite.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="map"></div>
                        <div className="contact">
                            <form className="mt-4" style={{
                                width: '100%',
                                background: '#f8f9fa ',
                                padding: '40px'
                            }} onSubmit={handleSubmit}>
                                <div className="form-group">

                                    <input type="text" name="name" className="d-block w-100" style={inputHeight}
                                        placeholder="Your Message" required value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">

                                    <input type="email" name="email" className="d-block w-100" style={inputHeight}
                                        placeholder="Your Email" required value={email} onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div className="form-group">

                                    <input type="text" name="website" className="d-block w-100" style={inputHeight}
                                        placeholder="Subject" value={website} onChange={(e) => setwebsite(e.target.value)} />
                                </div>
                                <div className="form-group">

                                    <textarea name="message" id="" cols="30" rows="10" className="d-block w-100" value={textarea}
                                        onChange={(e) => settextarea(e.target.value)} style={{ resize: 'none', textIndent: '10px' }} placeholder="Message"></textarea>
                                </div>
                                <input type="submit" value="Send Message" className='btn btn-warning mt-3'
                                    style={{ color: '#fff', height: '50px' }} />
                                <p className="text-success mt-3" id="thankYou">Thank You for Commenting...</p>
                            </form>



                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}