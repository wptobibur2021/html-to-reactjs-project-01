import React, {Component} from "react";
import './HeroSection.css'
import BackgroundImg from './hero-bg.jpg'
class HeroSection extends Component{
    render() {
        return (
            <section id="hero" style={{backgroundImage: `url(${BackgroundImg})`}} className="d-flex align-items-center">
                <div className="container" data-aos="zoom-out" data-aos-delay="100">
                    <h1>Welcome to <span>WP Tobibur</span></h1>
                    <h2>We are team of talented designers making websites</h2>
                    <div className="d-flex">
                        <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        <a href="https://www.youtube.com/watch?v=tbvguOj8C-o" className="glightbox btn-watch-video"><i
                            className="bi bi-play-circle"></i><span>Watch Video</span></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeroSection