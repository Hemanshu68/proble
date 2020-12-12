import React from "react";
import Post from "./post/Post";
import "./cards.css";

const Cards = () => {
    return (
        <div style={{ backgroundColor: "#ECF0F5", padding: "40px" }}>
            <div className='band'>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default Cards;
