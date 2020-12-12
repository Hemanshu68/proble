import React from "react";
import "./team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo1 from "../assets/team/neha.jpg";
import logo2 from "../assets/team/sam.jpeg";
import logo3 from "../assets/team/shivam.jpg";
import logo4 from "../assets/team/ruchi.png";
import logo5 from "../assets/team/jatin.jpg";
import logo6 from "../assets/team/raghav.png";
import logo7 from "../assets/team/hemanshu.jpg";
import logo from "../assets/team/yash.png";

const members = [
    {
        name: "Yash Kudesia",
        logo: logo,
        insta: "https://www.instagram.com/yashkudesia/",
        para: "Mentor",
        para1: "",
        in: "https://www.linkedin.com/in/yashkudesia",
    },
    {
        name: "Neha Kalbande",
        logo: logo1,
        insta: "https://www.instagram.com/neha14_03/",
        para: "Probe Head",
        para1: "Website Co-Head",
        in: "https://www.linkedin.com/in/neha-kalbande-314ab71a7",
    },
    {
        name: "Samruddhi Selukar",
        logo: logo2,
        insta: "https://www.instagram.com/fashion_fad_sam/",
        para: "Design Head",
        para1: "Content Co-Head",
        in: "https://www.linkedin.com/in/samruddhi-selukar-9190971b5",
    },
    {
        name: "Ruchika Pandharikar",
        logo: logo4,
        insta: "https://www.instagram.com/ruchika._.01p/",
        para: "Content Head",
        para1: "",
        in: "https://www.linkedin.com/in/ruchika-pandharikar-6033681a1",
    },
    {
        name: "Jatin Channgani",
        logo: logo5,
        insta: "https://www.instagram.com/jatin_chhangani02.09.19/",
        para: "Back-End Head",
        para1: "",
        in: "https://www.linkedin.com/in/jatinchhangani/",
    },
    {
        name: "Raghav Agarwal",
        logo: logo6,
        insta: "https://www.instagram.com/raghav.agrwl/",
        para: "Back-End Head",
        para1: "",
        in: "http://linkedin.com/in/raghav1701",
    },
    {
        name: "Hemanshu Chaudhari",
        logo: logo7,
        insta: "https://www.instagram.com/hemanshu__68/",
        para: "Front-End Head",
        para1: "",
        in: "https://www.linkedin.com/in/hemanshu-chaudhari-ba47251a3",
    },
    {
        name: "Shivam Soni",
        logo: logo3,
        insta: "https://www.instagram.com/shivamsoni1737/",
        para: "Management Head",
        para1: "",
        in: "https://www.linkedin.com/in/shivam-soni-s",
    },
];

const Team = (props) => {
    return (
        <div className='container'>
            {members.map((a, i) => (
                <div className='cards-wrapper'>
                    <div className='card'>
                        <img src={a.logo} alt='' className='image-top' />
                        <h1 className='full-name'>{a.name}</h1>
                        <p>
                            {a.para} <br />
                            {a.para1}
                        </p>
                        <ul className='social-icons'>
                            <div className='icon-div'>
                                <a href={a.insta}>
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className='follow-icon'
                                    />
                                </a>
                                <a href={a.in}>
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className='follow-icon'
                                    />
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;
