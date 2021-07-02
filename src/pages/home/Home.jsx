import React, {Component} from "react";
import TopBar from "../../component/common/topbar/TopBar";
import HeroSection from '../../component/hero/HeroSection'
import TopMenu from "../../component/common/topmenu/TopMenu";
import TopServices from '../../component/topservices/TopServices'
import About from "../../component/about/About";
import Skills from "../../component/skills/Skills";
import Counter from "../../component/counter/Counter";
import Faq from "../../component/faq/Faq";
import Contact from "../../component/contact/Contact";
import Footer from "../../component/footer/Footer";
import Services from "../../component/services/Services";
import Client from "../../component/client/Client";
import Testimonial from "../../component/testimonial/Testimonial";
import Portfolio from "../../component/portfolio/Portfolio";
import Team from "../../component/team/Team";

class Home extends Component{
    render() {
        return (
            <div className='main'>
                <TopBar></TopBar>
                <TopMenu></TopMenu>
                <HeroSection></HeroSection>
                <main id='main'>
                    <TopServices></TopServices>
                    <About></About>
                    <Skills></Skills>
                    <Counter></Counter>
                    <Client></Client>
                    <Services></Services>
                    <Testimonial></Testimonial>
                    <Team></Team>
                    <Portfolio></Portfolio>
                    <Faq></Faq>
                    <Contact></Contact>
                </main>
                <div id="preloader"></div>
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                    className="bi bi-arrow-up-short"></i></a>
                <Footer></Footer>

            </div>
        )
    }
}
export default Home