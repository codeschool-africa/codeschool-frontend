import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaSearch} from 'react-icons/all'

export default class Home extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="logo">
                        <Link to='/'><img src={Logo} alt="codeschool logo" /></Link>
                    </div>
                    <div className="dropdown">
                        <div className="burger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="submenu large-dropdown-menu">
                            <Link to='/'>ui/ux design</Link>
                            <Link to='/'>web development</Link>
                            <Link to='/'>mobile apps</Link>
                            <Link to='/'>computer science</Link>
                            <Link to='/'>machine learning</Link>
                            <Link to='/'>programming languages</Link>
                            <Link to='/'>microsoft technologies</Link>
                        </div>
                    </div>
                    <div className="search-bar">
                        <form>
                            <input type="text" placeholder="search anything" />
                            <button><FaSearch className="search-icon"></FaSearch></button>
                        </form>
                    </div>
                    <ul>
                        <li>
                            <Link to='/faq'>faq</Link>
                        </li>
                        <li>
                            <Link to='/'>become a mentor</Link>
                        </li>
                        <li>
                            <Link to='/signup'>register</Link>
                        </li>
                        <li>
                            <Link to='/login'>login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
