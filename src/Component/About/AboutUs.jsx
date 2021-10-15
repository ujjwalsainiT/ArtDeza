import React, { useEffect } from 'react'
import HOC from "../../Common/HOC";
import Topcarousel from '../Topcarousel/Topcarousel';
import { Grid } from '@material-ui/core';
import "./AboutUs.css";

import about from "../images/about.png";

function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Topcarousel />
            <div className="content_padding">
                <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                    <Grid item md={6}>
                        <div className="mt-3 mb-3 top_heading">
                            About Us
                        </div>
                        <div>
                            <p className="about_us_content text-justify ml-3 mr-3">
                                SaiKrishna Reddy is the founder & man behind the dream project,
                                passionate friends Hiranya & Rakesh Propel th dream project.
                                Artdeza is a perfect platform to satiate your thirst for the art of
                                photography, our bootcamps and Webinars are Taylor made to suit the
                                die hard hobbyist with a passion and flai for photography.
                            </p>
                        </div>

                        <div className="mt-2 mb-2 about_us_content">
                            <span className="icon_tick_color"><i class="fa fa-check p-2"></i></span>
                            <span><strong>Our Vision: </strong> To teach and share our knowledge & experience, focus will be on Learning the art of
                                photography, emphasize art form as a passion.
                            </span>
                        </div>

                        <div className="mt-2 mb-2 about_us_content">
                            <span className="icon_tick_color"><i class="fa fa-check p-2"></i></span>
                            <span><strong>Our Mission: </strong> Artdeza's mission is to discover &
                                nurture the future artist.
                            </span>
                        </div>
                    </Grid>


                    <Grid item md={6}>
                        <div className="mt-5 text-center ">
                            <img src={about} alt=""  />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HOC(AboutUs)
