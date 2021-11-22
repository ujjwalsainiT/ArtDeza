import React, { useState } from 'react';
import "./AfterLoginPage.css";
import HOC1 from '../../Common/HOC1.jsx';
import { Grid } from '@material-ui/core';

function MyCourse() {

    const [setlink, setsetlink] = useState("")
    const [heading, setheading] = useState("")
    const MyCoursevideo = [
        { link: "video1", data: "heading 1" },
        { link: "video2", data: "heading 2" },
        { link: "video3", data: "heading 3" },
        { link: "video4", data: "heading 4" },
        { link: "video5", data: "heading 5" },
        { link: "video6", data: "heading 6" }
    ]

    const videoHandle = (item) => {
        console.log("data", item)
        setsetlink(item.link)
        setheading(item.data)
    }
    return (
        <>
            <div className="data_Padding_after_login pb-5">
                <Grid className="Component_main_grid mt-2 p-3">
                    <Grid item md={3}>
                        <div className="mb-3"><strong>My Courses</strong></div>
                        <div className="p-2 content_forvideo">
                            <i class="fa fa-list mr-2"></i> Content
                        </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            {MyCoursevideo.map((item, index) => (
                                <li className="nav-item">
                                    <a className={`nav-link ${setlink === item.link ? "active" : ""}`} data-toggle="tab" href={`${item.link}`} role="tab" aria-controls="allmessage" onClick={() => videoHandle(item)}><i class="fa fa-play mr-2"></i>{item.data}</a>
                                </li>
                            ))}

                        </ul>
                    </Grid>
                    <Grid item md={9}>
                        <div className="tab-content">
                            {/* Video display */}
                            <div className="tab-pane active" id={setlink} role="tabpanel">
                                <div>{heading}</div>
                                <div className="mt-2 mb-2 p-2">
                                    {setlink === "" ?
                                        (
                                            <div className="text-center">
                                                Select the video to play
                                            </div>
                                        ) : (
                                            <video width="100%" height="400" controls>
                                                <source src="https://pixabay.com/videos/id-93826/" type="video/mp4" />
                                            </video>
                                        )}
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default HOC1(MyCourse)
