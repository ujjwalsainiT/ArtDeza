import React from 'react';
import Topcarousel from '../Topcarousel/Topcarousel';
import HOC from "../../Common/HOC";
import { Grid, Card, Button } from '@material-ui/core';
import "./Home.css";
import b from "../images/b.jpeg";
import c from "../images/c.png";
import d from "../images/d.png";

import i1 from "../images/i1.png";
import i2 from "../images/i2.png";
import i3 from "../images/i3.png";
import i4 from "../images/i4.png";
import VideoCarousel from '../VideoCarousel/VideoCarousel';
import StudentReviews from '../StudentReviews/StudentReviews';
import CompanyCarousel from '../CompanyCarousel/CompanyCarousel';
function Home() {
    return (
        <>
            <div>
                <Topcarousel />
                <div className="home_backImage hom_page_event_padding">
                    <div className="text-center Event_top_heading">UPCOMING EVENTS</div>
                    <p className="text-center eventpara_formatting mt-1">learning with us is all about thinking like a master storyteeller, illuminating<br />
                        those porraits, controlling the light, visualizing and perfectting every frame.</p>

                    <div className="text-center pt-3 Event_top_heading">----- Workshops -----</div>

                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={3}>
                            <div className="m-2">
                                <Card className="Card_shadow">
                                    <img src={b} alt="" className="cards_image" />
                                    <div className="p-2 backcolor_card_tag text-center">
                                        <div>Master Photography</div>
                                        <div>10/11/2021 - 15/11/2021</div>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="m-2">
                                <Card className="Card_shadow">
                                    <img src={b} alt="" className="cards_image" />
                                    <div className="p-2 backcolor_card_tag text-center">
                                        <div>Master Photography</div>
                                        <div>10/11/2021 - 15/11/2021</div>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="m-2">
                                <Card className="Card_shadow">
                                    <img src={b} alt="" className="cards_image" />
                                    <div className="p-2 backcolor_card_tag text-center">
                                        <div>Master Photography</div>
                                        <div>10/11/2021 - 15/11/2021</div>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="m-2">
                                <Card className="Card_shadow">
                                    <img src={b} alt="" className="cards_image" />
                                    <div className="p-2 backcolor_card_tag text-center">
                                        <div>Master Photography</div>
                                        <div>10/11/2021 - 15/11/2021</div>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="text-center pt-3 Event_top_heading">----- Bootcamps -----</div>

                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={3}>
                            <div className="m-2">
                                <Card className="Card_shadow">
                                    <img src={b} alt="" className="cards_image" />
                                    <div className="p-2 backcolor_card_tag text-center">
                                        <div>Master Photography</div>
                                        <div>10/11/2021 - 15/11/2021</div>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="m-2">
                                <Card className="Card_shadow">
                                    <img src={b} alt="" className="cards_image" />
                                    <div className="p-2 backcolor_card_tag text-center">
                                        <div>Master Photography</div>
                                        <div>10/11/2021 - 15/11/2021</div>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="m-2">
                                <Card className="Card_shadow">
                                    <img src={b} alt="" className="cards_image" />
                                    <div className="p-2 backcolor_card_tag text-center">
                                        <div>Master Photography</div>
                                        <div>10/11/2021 - 15/11/2021</div>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="m-2">
                                <Card className="Card_shadow">
                                    <img src={b} alt="" className="cards_image" />
                                    <div className="p-2 backcolor_card_tag text-center">
                                        <div>Master Photography</div>
                                        <div>10/11/2021 - 15/11/2021</div>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="p-5 mt-2 E_learning_backcolor">
                    <div className="text-center Event_top_heading">----- E-Learning -----</div>
                </div>

                <div className="mt-2 mb-2 e_learing_margin">
                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={6}>
                            <div className="p-3">
                                <p className="e_learingpara_formatting mt-1">
                                    There are a host of ceative tools through using photography that can deveelop
                                    creativity and thinking. Both hard andd soft skilled approachs to tasks enable
                                    the maximum output for a project and exercise of the scheme. Ideal for
                                    developing skills in leaders.
                                </p>
                                <div className="text-right"><Button className="crasoul_button mt-2 ">Explore</Button></div>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className="m-2 ">
                                <img src={c} alt="" className="e_learning_image" />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="m-3">
                    <VideoCarousel />
                </div>


                <div className="mt-5 mb-4">
                    <div className="text-center Certification_top_heading">Photography Certification Course</div>
                    <p className="text-center Certification_para_formatting mt-1">
                        Get the classroom experience from the comfort of your home
                    </p>
                </div>
                <div className="mt-2 mb-2">
                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">

                        <Grid item md={6}>
                            <div className="m-2 text-center">
                                <img src={d} alt="" className="e_learning_image" />
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className="p-3">
                                <span><img src={i1} alt="" /></span>
                                <span className="ml-3 Certification_para_formatting">Online Certificate Course In Photography</span>
                            </div>

                            <div className="p-3">
                                <span><img src={i2} alt="" /></span>
                                <span className="ml-3 Certification_para_formatting">Certificate Course Details</span>
                            </div>

                            <div className="p-3">
                                <span><img src={i3} alt="" /></span>
                                <span className="ml-3 Certification_para_formatting">Course Outline</span>
                            </div>

                            <div className="p-3">
                                <span><img src={i4} alt="" /></span>
                                <span className="ml-3 Certification_para_formatting">Course Requirement</span>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="mt-5 mb-4">
                    <div className="text-center Certification_top_heading">| Students Gallery |</div>
                </div>
                <div className="mt-2 mb-2">
                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={3}>
                            <div className="m-2 text-center">
                                <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg" alt="" className="gallery_image_formatting" />
                            </div>
                        </Grid>

                        <Grid item md={3}>
                            <div className="m-2 text-center">
                                <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg" alt="" className="gallery_image_formatting" />
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="m-2 text-center">
                                <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg" alt="" className="gallery_image_formatting" />
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="m-2 text-center">
                                <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg" alt="" className="gallery_image_formatting" />
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="m-2 text-center">
                                <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg" alt="" className="gallery_image_formatting" />
                            </div>
                        </Grid>
                    </Grid>
                    <div className="text-info text-center"><span className="hover_cursor">View All</span></div>
                </div>


                <div className="mt-5 mb-4">
                    <div className="text-center Certification_top_heading">"Have a look what our Students <br />have to say about us"</div>
                </div>

                <div className="m-2">
                    <StudentReviews />
                </div>

                <div className="mt-5 mb-4">
                    <div className="text-center Certification_top_heading">Our Partners</div>
                </div>

                <hr />
                <div className="m-2">
                    <CompanyCarousel />
                </div>
                <hr />
            </div>
        </>
    )
}

export default HOC(Home)
