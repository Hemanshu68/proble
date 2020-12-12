import React from "react";
import image_probe from "../assets/logo-black.png";
import "./about.css";

function about() {
    return (
        <div className='container'>
            <div className='row '>
                <div className='col'>
                    <div className='text-muted'>
                        <h2 className='featurette-heading'>
                            <br />
                            Probe is the student media body of the Indian
                            Institute of Information Technology, Nagpur run by
                            students.
                        </h2>
                        <p className='lead'>
                            PROBE aims to serve as a vital link between the
                            student community and the administration through a
                            news feed for the students, professors and alumni of
                            the institute, featuring campus activities,
                            department updates, recruitment information, Council
                            happenings, alumni news, polls and interviews of
                            various authorities like Director, Chief Warden,
                            professors, distinguished alumni, dignitaries, and
                            students representatives on various posts.
                        </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <img
                    className='image-fluid'
                    src={image_probe}
                    alt='proble-logo'
                />
            </div>
        </div>
    );
}

export default about;
