import React from "react";
import Post from "./post/Post";
import insti from "../assets/insti";
import tech from "../assets/technical.js";
import ach from "../assets/achievements.js";
import club from "../assets/clubs.js";
import cult from "../assets/cultural.js";
import host from "../assets/hostel.js";
import ComingSoon from "../Template/ComingSoon";
import sac from "../assets/students-counsil/sac";
import "./category.css";

const mapper = {
    technical: 0,
    achievements: 1,
    clubs: 2,
    cultural: 3,
    hostel: 4,
    insti: 5,
    studentscouncil: 6,
    alumni: 7,
    crackJackers: 8,
    futuristic: 9,
};
const all = [tech, ach, club, cult, host, insti, sac];
const category = (props) => {
    const { category } = props.match.params;
    const da = all[mapper[category]];
    return (
        <>
            {mapper[category] > 6 ? (
                <ComingSoon />
            ) : (
                <div className='category-main'>
                    <h2>{`Category: ${
                        category.charAt(0).toUpperCase() + category.slice(1)
                    }`}</h2>
                    <h2></h2>
                    {da.map((item, index) => {
                        return (
                            <Post
                                category={category}
                                id={item.id}
                                name={item.name}
                                date={item.date}
                                src={item.src}
                                body={item.body}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default category;
