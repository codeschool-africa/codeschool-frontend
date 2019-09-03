import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaFacebookF, FaGoogle} from 'react-icons/all'
import '../style/user/style.css'

export default class Auth extends Component {
    render() {
        return (
            <div className='register'>
                <div className="container">
                    <div className="logo">
                        <Link to='/'><img src={Logo} alt="codeschoollogo"/></Link>
                    </div>
                    <div className="">
                        <h1>Enter the codes sent to your email</h1>
                        <input type="text" placeholder="Enter your first name"/>
                        <input type="submit" value="Submit"/>
                    </div>
                </div>
            </div>
        )
    }
}