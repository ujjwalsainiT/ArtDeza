import React from 'react'
import "./PurchaseCourse.css"
import HOC from "../../Common/HOC";
import { Grid, Card, Button } from '@material-ui/core';

//used images
import certificate from "../images/certificate.png";
import photo from "../images/photo.png";
import forum from "../images/forum.png";
import responsive from "../images/responsive.png";

function CourseDetails() {
    return (
        <>
            <div className="data_Padding_after_login pb-5">
                <div className="Learn_top_heading">Course Heading</div>
                <div className="mt-3">
                    <Grid className="Component_main_grid mt-2 mb-2">
                        <Grid item md={8} className="p-2">
                            <video width="100%" height="400" controls>
                                <source src="https://pixabay.com/videos/id-93826/" type="video/mp4" />
                            </video>
                        </Grid>
                        <Grid item md={4} className="p-2">
                            <div><span className="course_detail_heading">Course Level: </span> <span className="course_detail_content">Beginner</span></div>
                            <div><span className="course_detail_heading">Language: </span> <span className="course_detail_content">English</span></div>
                            <div><span className="course_detail_heading">Instructor: </span> <span className="course_detail_content">Jassi Oberai</span></div>
                            <div><span className="course_detail_heading">Duration: </span> <span className="course_detail_content">1 hour 36 min</span></div>

                            <hr />
                            <Grid className="Component_main_grid mt-2 mb-2">
                                <Grid item md={6} className="p-2">
                                    <div className="mt-3  text-center">
                                        <Button
                                            variant="contained"
                                            className="button_formatting"

                                        >
                                            Free Class
                                        </Button>
                                        <div className="course_detail_content mt-2  text-center">6 Months Validity</div>
                                    </div>
                                </Grid>
                                <Grid item md={6} className="p-2">
                                    <div className="course_detail_content text-center mt-1">starting</div>
                                    <div className="course_detail_price text-center mt-1">
                                        Rs. 1499/quartar*
                                    </div>
                                    <div className="mt-3 text-center">
                                        <Button
                                            variant="contained"
                                            className="button_formatting"

                                        >
                                            Get Bundle
                                        </Button>
                                        <div className="course_detail_content text-center mt-2">Unlock this class</div>
                                    </div>
                                </Grid>
                            </Grid>

                            <hr />
                        </Grid>
                    </Grid>

                    <div className="Learn_top_heading text-center mt-5"> About Course</div>

                    <div className="course_description_para mt-3">
                        Digital cameras have revolutionised the world of photography. And post processing is one of the
                        most significant possibilities that it has opened up. It is essential that today’s photographers
                        stay abreast of these developments and the best place to start is with Lightroom Classic CC. Acclaimed
                        photographer Jassi Oberai enumerates the advantages of Lightroom and sets you off on your journey in
                        using this software. This session covers the essentials like importing, organising and rating your
                        photos, creating catalogues, and using smart previews.
                    </div>

                    <div className="mt-5">
                        <Grid className="Component_main_grid mt-2 mb-2">
                            <Grid item md={3} className="p-2">
                                <Card className="pt-2 pb-2 Card_shadow  mt-2">
                                    <div className="text-center">
                                        <img src={certificate} alt="" style={{ width: "150px", height: "150px" }} />
                                        <div className="course_description_para text-center mt-2">Certificate of Completion</div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item md={3} className="p-2">
                                <Card className="pt-2 pb-2 Card_shadow  mt-2">
                                    <div className="text-center">
                                        <img src={photo} alt="" style={{ width: "150px", height: "150px" }} />
                                        <div className="course_description_para text-center mt-2">Assignments</div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item md={3} className="p-2">
                                <Card className="pt-2 pb-2 Card_shadow  mt-2">
                                    <div className="text-center">
                                        <img src={forum} alt="" style={{ width: "150px", height: "150px" }} />
                                        <div className="course_description_para text-center mt-2">Discussion Forum</div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item md={3} className="p-2">
                                <Card className="pt-2 pb-2 Card_shadow  mt-2">
                                    <div className="text-center">
                                        <img src={responsive} alt="" style={{ width: "150px", height: "150px" }} />
                                        <div className="course_description_para text-center mt-2">Watch on Any Device</div>
                                    </div>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HOC(CourseDetails)
