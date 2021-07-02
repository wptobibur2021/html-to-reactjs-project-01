import React, {Component} from "react";
import './Topmenu.css'
class TopMenu extends Component{
    render() {
        return(
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><a href="https://tobibur.algorizin.com">WP Tobibur<span>.</span></a></h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""></a>*/}
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>
            </div>
        </header>
    )
    }

}

export default TopMenu