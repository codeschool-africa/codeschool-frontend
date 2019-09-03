import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaFacebookF, FaGoogle} from 'react-icons/all'
import '../style/user/style.css'

export default class Signup extends Component {
    render() {
        return (
            <div className='register'>
                <div className="container">
                    <div className="logo">
                        <Link to='/'><img src={Logo} alt="codeschoollogo"/></Link>
                    </div>
                    <div className="form">
                        <h1>Register</h1>
                        <input type="text" placeholder="Enter your first name"/>
                        <input type="text" placeholder="Enter your last name"/>
                        <input type="email" placeholder="email@example.com"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm password"/>
                        <p>Already have an account? <Link to="/login">Log in</Link></p>
                        <input type="submit" value="Register"/>
                        <p>Or sign up with</p>
                        <div className="btn">
                            <button><FaFacebookF/>&nbsp;Facebook</button>
                            <button><FaGoogle className='google-icon'/>&nbsp;Google</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}