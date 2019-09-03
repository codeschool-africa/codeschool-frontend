import React, { Component } from 'react'
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/all'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-links">
                    <div className="container">
                        <div class="col col1">
                            <Link to='/'>become a mentor</Link>
                            <Link to='/'>mentorship</Link>
                            {/* <h4>codeschool app is coming soon!!!</h4> */}
                        </div>
                        <div className="col col2">
                            <Link to='/'>about us</Link>
                            <Link to='/'>help and support</Link>
                            <Link to='/'>contact us</Link>
                        </div>
                        <div className="col col3">
                             <Link to='/signup'>register</Link>
                             <Link to='/login'>login</Link>
                             <h4>extra links</h4>
                             <Link to='/'>blog</Link>
                             <Link to='/'>sponsors</Link>
                        </div>
                        <div className="col col4">
                            <h3>follow us on</h3>
                            <div className="follow">
                                <a href="#"><FaFacebookF className='icon'/></a>
                                <a href="#"><FaTwitter className='icon'/></a>
                                <a href="#"><FaInstagram className='icon'/></a>
                            </div>
                            <h3>subscribe to our newsletter</h3>
                            <form>
                                <input type="text" placeholder="example@email.com"/>
                                <button type="submit">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="left-bottom">
                            <img src={Logo} alt="codeschool logo"/>
                            <p className="copyright">
                                codeschool &copy; 2019 - all rights reserved 
                            </p>
                        </div>
                        <div></div>
                        <div className="right-bottom">
                            <Link to='/'>privacy policy</Link>
                            <Link to='/'>terms and conditions</Link>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
