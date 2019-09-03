import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaFacebookF, FaGoogle} from 'react-icons/all'
import '../style/user/style.css'
import Modal from 'react-responsive-modal';

export default class Login extends Component {
    state = {
        open: false,
      };
     
      onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        const { open } = this.state;
        return (
            <div className='register'>
                <div className="container">
                    <div className="logo">
                        <Link to='/'><img src={Logo} alt="codeschoollogo"/></Link>
                    </div>
                    <div className="form">
                        <h1>Log in</h1>
                        <input type="email" placeholder="email@example.com"/>
                        <input type="password" placeholder="Password"/>
                        <button onClick={this.onOpenModal}>Forgot password?</button>
                        <Modal open={open} onClose={this.onCloseModal} center>
                            <div className="modal">
                                <label htmlFor="email">Enter you email</label>
                                <input type="email" name="email" placeholder="Email"/>
                                <input type="button" value="Send"/>
                            </div>
                        </Modal>
                        <p>Don't have an account yet? <Link to="/signup">Register</Link></p>
                        <input type="submit" value="Log in"/>
                        <p>Or log in with</p>
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