import React, { useState } from 'react'
import './FormComment.css';
export default function FormComment() {
    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [website, setwebsite] = useState('')
    const [textarea, settextarea] = useState('')
    const inputHeight = {
        height: '40px'
    }
    const thankYouForm = document.getElementById('thankYouForm');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== '' && email !== '' && website !== '') {
            thankYouForm.style.display = 'block';
            setTimeout(() => {
                thankYouForm.style.display = 'none';
            }, 1000);
        }
        setName('');
        setemail('');
        setwebsite('');
        settextarea('');
    }
    return (
        <>
            <div className="col-lg-12">
                <h4>Leave a Comment</h4>
                <form className="mt-4" style={{
                    width: '100%',
                    background: '#f8f9fa ',
                    padding: '40px'
                }} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" name="name" className="d-block w-100" style={inputHeight} required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" name="email" className="d-block w-100" style={inputHeight} required value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="website">Website </label>
                        <input type="text" name="website" className="d-block w-100" style={inputHeight} value={website} onChange={(e) => setwebsite(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message </label>
                        <textarea name="message" id="" cols="30" rows="10" className="d-block w-100" style={{ resize: 'none' }} value={textarea} onChange={(e) => settextarea(e.target.value)}></textarea>
                    </div>
                    <input type="submit" value="Post a Comment" className='btn btn-warning mt-3' style={{ color: '#fff', height: '50px' }} />
                    <p className="text-success mt-3" id="thankYouForm">Thank You for Commenting...</p>
                </form>
            </div>

        </>
    )
}
