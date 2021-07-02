import React, {Component} from 'react';
import './Counter.css'
class Counter extends Component {
    render() {
        return <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-emoji-smile" />
                            <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext" />
                            <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-headset" />
                            <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
                            <p>Hours Of Support</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-people" />
                            <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                            <p>Hard Workers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Counter;