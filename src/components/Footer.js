import React from 'react'
import { Button }from './Button'
import {Link } from 'react-router-dom'
import './footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Join with us to explore the adventure</p>
                <p className="footer-subscription-text">U can unsubscribe at any time</p>
                <div className="input-areas">
                    <form>
                        <input type="email" placeholder='your email'className='footer input'/>
                        <Button buttonstyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-item">
                        <h2>About</h2>
                        <Link to='/signup'>how it works</Link>
                        <Link to='/signup'>terms of services</Link>
                        <Link to='/signup'>carrer</Link>
                        <Link to='/signup'>investors</Link>
                        <Link to='/signup'>testimonials</Link>
                    </div>
                    <div className="footer-link-item">
                        <h2>Contact us</h2>
                        <Link to='/signup'>how it works</Link>
                        <Link to='/signup'>terms of services</Link>
                        <Link to='/signup'>carrer</Link>
                        <Link to='/signup'>investors</Link>
                        <Link to='/signup'>testimonials</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-item">
                        <h2>videos</h2>
                        <Link to='/signup'>how it works</Link>
                        <Link to='/signup'>terms of services</Link>
                        <Link to='/signup'>carrer</Link>
                        <Link to='/signup'>investors</Link>
                        <Link to='/signup'>testimonials</Link>
                    </div>
                    <div className="footer-link-item">
                        <h2>social media</h2>
                        <Link to='/signup'>facebook</Link>
                        <Link to='/signup'>instsgram</Link>
                        <Link to='/signup'>linked in</Link>
                        <Link to='/signup'>tweeter</Link>
                        <Link to='/signup'>youtube</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <Link to='/' className='social-logo'>TRVL <i className='fab fa-typo3'/></Link>
                </div>
                <small className='rights'>TRVL © 2020</small>
                <div className="social-icons">
                    <Link className="icons-social" to='/' target='_blank'><i class="fab fa-facebook-square"></i></Link>
                    <Link className="icons-social" to='/' target='_blank'><i class="fab fa-instagram"></i></Link>
                    <Link className="icons-social" to='/' target='_blank'><i class="fab fa-twitter"></i></Link>
                    <Link className="icons-social" to='/' target='_blank'><i class="fab fa-youtube"></i></Link>
                    <Link className="icons-social" to='/' target='_blank'><i class="fab fa-linkedin-in"></i></Link>
                    <Link className="icons-social" to='/' target='_blank'><i class="fab fa-whatsapp"></i></Link>
                </div>
            </section>
        </div>
    )
}

export default Footer
