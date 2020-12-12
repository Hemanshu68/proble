import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";

class Contact extends Component {
    render() {
        return (
            <section className='ftco-section bg-light'>
                <div className='container-back'>
                    <div className='temp'>
                        <div className='temp-add'>
                            <div className='inner-add'>
                                <h4>Temporary Campus:</h4>
                                <p>
                                    IIIT Nagpur, BSNL - Regional Telecom
                                    Training Center (RTTC), Near TV Tower or
                                    Beside Balaji Temple, Seminary Hills,
                                    Nagpur, Maharashtra - 440006
                                </p>
                            </div>
                        </div>
                        <div className='temp-map'>
                            <iframe
                                className='map'
                                title='temp'
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6934100457315!2d79.05257481476572!3d21.164596085924966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c052e5bc862b%3A0x8b4fa6012f8f4f6f!2sIndian%20Institute%20of%20Information%20Technology%2CNagpur!5e0!3m2!1sen!2sin!4v1596018228945!5m2!1sen!2sin'
                            ></iframe>
                        </div>
                    </div>
                    <hr />
                    <div className='perm'>
                        <div className='perm-map'>
                            <iframe
                                className='map'
                                title='perm'
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.0593404036663!2d79.02472761476187!3d20.950131986040997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bd31565e6f4d%3A0x39d21cf025fb991e!2sIIIT%20NAGPUR%20PERMANENT%20CAMPUS!5e0!3m2!1sen!2sin!4v1596018284010!5m2!1sen!2sin'
                            ></iframe>
                        </div>
                        <div className='perm-add'>
                            <div className='inner-add'>
                                <h4>Upcoming Campus:</h4>
                                <p>
                                    Unnamed Road, Borkhedi, Maharashtra 441108
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='contact-form'>
                    <h3>
                        <a href='mailto: theprobeiiitn@gmail.com'>Mail Us</a>
                    </h3>
                    <br />
                    <p>Or</p>
                    <br />
                    <form
                        method='POST'
                        id='contactForm'
                        name='contactForm'
                        className='contactForm'
                    >
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='label' for='name'></label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        name='name'
                                        id='name'
                                        placeholder='Name'
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class='form-group'>
                                    <label class='label' for='email'>
                                        Email Address
                                    </label>
                                    <input
                                        type='email'
                                        class='form-control'
                                        name='email'
                                        id='email'
                                        placeholder='Email'
                                    />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class='form-group'>
                                    <label class='label' for='subject'>
                                        Subject
                                    </label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        name='subject'
                                        id='subject'
                                        placeholder='Subject'
                                    />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class='form-group'>
                                    <label class='label' for='#'>
                                        Leave Us A Message
                                    </label>
                                    <textarea
                                        name='message'
                                        class='form-control'
                                        id='message'
                                        cols='30'
                                        rows='4'
                                        placeholder='Message'
                                    ></textarea>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class='form-group'>
                                    <input
                                        type='submit'
                                        value='Send Message'
                                        class='btn btn-primary'
                                    />
                                    <div class='submitting'></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* <Footer /> */}
            </section>
        );
    }
}

export default Contact;
