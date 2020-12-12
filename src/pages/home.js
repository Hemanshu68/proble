import React, { Component } from "react";
import HomeCorosel from "../Template/Card";
import "./home.css";
// import img from "../assets/test.jpg";
import insti from "../assets/insti";
import tech from "../assets/technical.js";
import ach from "../assets/achievements.js";
import club from "../assets/clubs.js";
import cult from "../assets/cultural.js";
import host from "../assets/hostel.js";
import { Link } from "react-router-dom";
import { Markup } from "interweave";

function itemBuilder(...args) {
    const item = args[0];
    return (
        <div className='latest-card-outter' key={`${args[0]}${item.id}`}>
            <img
                src={item.src}
                style={{
                    maxWidth: "98%",
                    padding: "2px",
                    margin: "5px 0",
                }}
            />
            <article style={{ padding: "10px" }}>
                <span>
                    <h5>{item.name}</h5>
                </span>
                <span
                    style={{
                        color: "#E8533B",
                        fontSize: "15px",
                    }}
                >
                    {item.date}
                </span>
                <div className='content-p'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Markup content={item.body} />
                </div>
                <Link to={`/category/${args[1]}/${item.id}`} className='rdm'>
                    &nbsp; Read more
                </Link>
            </article>
        </div>
    );
}

class Home extends Component {
    render() {
        const mapper = {
            0: "technical",
            1: "achievements",
            2: "clubs",
            3: "cultural",
            4: "hostel",
            5: "insti",
        };

        const techd = tech.slice(0, 4).map((item, index) => {
            return itemBuilder(item, mapper[0]);
        });
        const achd = ach.slice(0, 4).map((item, index) => {
            return itemBuilder(item, mapper[1]);
        });
        const clubd = club.slice(0, 4).map((item, index) => {
            return itemBuilder(item, mapper[2]);
        });
        const cultd = cult.slice(0, 4).map((item, index) => {
            return itemBuilder(item, mapper[3]);
        });
        const hostd = host.slice(0, 4).map((item, index) => {
            return itemBuilder(item, mapper[4]);
        });
        const instid = insti.slice(0, 4).map((item, index) => {
            return itemBuilder(item, mapper[5]);
        });

        const all = [instid, achd, clubd];
        return (
            <div className='home-container'>
                <div className='first-home'>
                    <HomeCorosel></HomeCorosel>
                    <div className='fist-home-card'>
                        <h3 style={{ padding: "0 15px" }}>Latest News:</h3>
                        <article
                            style={{
                                padding: "10px",
                                margin: "15px",
                            }}
                        >
                            {/* <span>Title</span>
                            <br />
                            <span>Date</span> */}
                            <ul style={{ listStyle: "inside" }}>
                                <li>
                                    Techfest in pandemic , Tantrafiesta held on
                                    17th-18th 2020 concluded successfully.
                                </li>
                                <li>Regular online classes resumed.</li>
                            </ul>
                        </article>
                    </div>
                </div>

                {all.map((a, i) => {
                    return (
                        <div className='cc'>
                            <h3 className='test'>
                                {mapper[i].charAt(0).toUpperCase() +
                                    mapper[i].slice(1)}
                            </h3>
                            <article className='home-art'>{a}</article>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Home;
