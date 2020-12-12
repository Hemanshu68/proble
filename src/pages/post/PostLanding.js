import React, { Component } from "react";
import "./postlanding.css";
import insti from "../../assets/insti";
import tech from "../../assets/technical.js";
import ach from "../../assets/achievements.js";
import club from "../../assets/clubs.js";
import cult from "../../assets/cultural.js";
import host from "../../assets/hostel.js";
import sac from "../../assets/students-counsil/sac";
import { Markup } from "interweave";

const mapper = {
    technical: 0,
    achievements: 1,
    clubs: 2,
    cultural: 3,
    hostel: 4,
    insti: 5,
    studentscouncil: 6,
};
const all = [tech, ach, club, cult, host, insti, sac];

class PostLanding extends Component {
    render() {
        const da = all[mapper[this.props.match.params.category]].find(
            (item, index) => {
                if (item.id === Number(this.props.match.params.id)) {
                    return true;
                }
            }
        );
        const dat = [];
        dat.push(da);

        return (
            <div className='postl-wrapper'>
                {dat.map((data, i) => {
                    return (
                        <div className='postl-container' key={i}>
                            <h2 className='postl-title'>{data.name}</h2>
                            <div className='post-details'>
                                <span className='date'>
                                    {data.date} &nbsp;&nbsp;
                                </span>
                                <span className='category'>{data.type}</span>
                            </div>
                            <div className='post-container'>
                                <div className='postl-img'>
                                    <img
                                        src={data.src}
                                        alt={data.name}
                                        className='post-img-img'
                                    />
                                </div>
                                <div className='post-content-content'>
                                    <Markup content={data.body} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default PostLanding;
