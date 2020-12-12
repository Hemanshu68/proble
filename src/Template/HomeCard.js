import React from "react";
import { Link } from "react-router-dom";
const css = { maxWidth: "98%", padding: "2px", margin: "5px 0" };

const HomeCard = ({ item }) => {
    console.log(item);
    return (
        // <div className='latest-card-outter'>
        //     <>
        //         {/* <img src={content[keyName].src} style={css} /> */}

        //         <article style={{ padding: "10px" }}>
        //             <span>
        //                 <h5>{name}</h5>
        //             </span>
        //             <span
        //                 style={{
        //                     color: "#E8533B",
        //                     fontSize: "15px",
        //                 }}
        //             >
        //                 {date}
        //             </span>
        //             <p className='content-p'>&nbsp;&nbsp;&nbsp;&nbsp;{body}</p>
        //             <Link to={name} className='rdm'>
        //                 &nbsp; Read more
        //             </Link>
        //         </article>
        //     </>
        // </div>
        <h1>Hello</h1>
    );
};

export default HomeCard;
