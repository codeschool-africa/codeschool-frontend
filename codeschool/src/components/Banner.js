import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/all'
import BgImage from '../images/bg-image.png'

export default class Banner extends Component {
    render() {
        return (
            <div className="header" 
                style={{
                    backgroundImage:`url(${BgImage})`
                }}
            >
                <div className="bg-heading">
                    <h1>Coding is fun! learn today, build tomorrow</h1>
                    <p>Are you interested in learning coding? <Link to='/signup'>dive in!</Link></p>
                    <blockquote>
                        <FaQuoteLeft className='quotes'/>
                        As long as you are alive, you have a better chance to better your best
                        <FaQuoteRight className="quotes"/>
                        <footer><i>- Anonymous</i></footer>
                    </blockquote>
                </div>
            </div>
        )
    }
}
