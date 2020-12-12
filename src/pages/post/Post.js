import { Markup } from "interweave";
import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
    const { id, name, date, src, category, body } = props;
    return (
        <div className='item-d'>
            <div className='c-card'>
                <div
                    className='thumb-d'
                    style={{
                        backgroundImage: `url(${src})`,
                    }}
                ></div>
                <article style={{ padding: "7px" }}>
                    <Link
                        className='title-a'
                        to={`/category/${category}/${id}`}
                    >
                        <h1>{name}</h1>
                    </Link>
                    <span style={{ color: "red" }}>{date}</span>
                    <div className='content-p'>
                        <Markup content={body} />
                    </div>
                    <Link to={`/category/${category}/${id}`}>
                        <button className='rm-btn'> Read More </button>
                    </Link>
                </article>
            </div>
        </div>
    );
};
export default Post;
