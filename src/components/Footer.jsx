import React from 'react'
import { Link } from 'react-router-dom'
import './CssFiles/Footer.css'

const Footer = () => {
    return (
        <div className='container'>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-sm-4 col-xs-12">
                            <div class="single_footer">
                                <h4>Services</h4>
                                <ul>
                                    <li><Link to="#">Lorem Ipsum</Link></li>
                                    <li><Link to="#">Simply dummy text</Link></li>
                                    <li><Link to="#">The printing and typesetting </Link></li>
                                    <li><Link to="#">Standard dummy text</Link></li>
                                    <li><Link to="#">Type specimen book</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--- END COL --> */}
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="single_footer single_footer_address">
                                <h4>Page Links</h4>
                                <ul>
                                    <li><Link to="/Privacy-Policy"> Privacy Policy</Link></li>
                                    <li><Link to="/terms-and-conditions">terms & conditions</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><a href="/sitemap.xml">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--- END COL --> */}
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="single_footer single_footer_address">
                                <h4>Subscribe today</h4>
                                <div class="signup_form">
                                    <form action="#" class="subscribe">
                                        <input type="text" class="subscribe__input" placeholder="Enter Email Address" />
                                            <button type="button" class="subscribe__btn"><i class="fa fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div class="social_profile">
                                <ul>
                                    <li><Link to="#"><i class="fa fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i class="fa fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i class="fa fa-google-plus"></i></Link></li>
                                    <li><Link to="#"><i class="fa fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--- END COL --> */}
                    </div>
                    {/* <!--- END ROW --> */}
                    <div class="row">
                        <div class="col-lg-12 col-sm-12 col-xs-12">
                            <p class="copyright">Copyright © 2019 <Link to="/">Baji Infotech</Link>.</p>
                        </div>
                        {/* <!--- END COL --> */}
                    </div>
                    {/* <!--- END ROW --> */}
                </div>
                {/* <!--- END CONTAINER --> */}
            </div>
        </div>
    )
}

export default Footer