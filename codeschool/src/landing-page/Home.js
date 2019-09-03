import React, { Component } from 'react'
import '../style/Style.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Tutorials from '../components/Tutorialsshow'
import Slides from '../components/Slider'
import Articles from '../components/Articles'
import Footer from '../components/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <Tutorials/>
                <Slides/>
                <Articles/>
                <Footer/>
            </div>
        )
    }
}
