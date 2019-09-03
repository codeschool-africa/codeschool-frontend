import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Bg1 from '../images/bgp.jpg';
import Bg2 from '../images/bgp-2.jpg'

const content = [
    {
        title: "Service 1",
        description: "Sub-service 1 Sub-service 1 Sub-service 1 Sub-service 1 Sub-service 1",
        src: "/signup",
        image: Bg1
    },
    {
        title: "Service 2",
        description: "Sub-service 2 Sub-service 2 Sub-service 2 Sub-service 2 Sub-service 2",
        src: "/login",
        image: Bg2
    },
    {
        title: "Service 3",
        description: "Sub-service 3 Sub-service 3 Sub-service 3 Sub-service 3 Sub-service 3",
        src: "/login",
        image: Bg1
    }
  ];

export default class Slides extends Component {
    
    render() {
        return (
            <Slider autoplay={2500}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat center top` }}
                    >
                        <div className="center">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <Link to={item.src}>Read more</Link>
                        </div>
                    </div>
                ))}
            </Slider>
        )
    }
}
