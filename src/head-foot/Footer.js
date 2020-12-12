import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='arch-cont'>
                    <h4>Archive</h4>
                    <div className='arch-div'>
                        <select className='arch-select' disabled={true}>
                            <option>Select the Month</option>
                            <option>Helo</option>
                            <option>melo</option>
                            <option>kelo</option>
                            <option>belo</option>
                            <option>yelo</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h4 style={{ color: "#4a74f0" }}>Campus: </h4>
                    <p style={{ fontSize: 18 }}>IIIT Nagpur</p>
                    <p style={{ fontSize: 18 }}>
                        Near TV Tower or Beside Balaji Temple, Seminary Hills,
                    </p>
                    <p style={{ fontSize: 18 }}>Nagpur, Maharashtra - 440006</p>
                </div>
                <div className='quix-link'>
                    <h4 style={{ color: "#4a74f0" }}>Quick Links</h4>
                    <ul className='quix-link-ul'>
                        <a href='/team' className='pat'>
                            <li>Our Team</li>
                        </a>
                        <a href='/contact' className='pat'>
                            <li> Contact</li>
                        </a>
                        <a href='/' className='pat'>
                            <li>Join Team </li>
                        </a>
                        <a href='/about' className='pat'>
                            <li>About</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className='copy-cont'>
                <p className='copy-txt'>
                    Copyright &copy; 2020-2021 The Probe:&nbsp;&nbsp;
                    <a href='!#' className='pat'>
                        Privacy
                    </a>
                    &nbsp;&nbsp;
                    <a href='!#' className='pat'>
                        Terms
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
