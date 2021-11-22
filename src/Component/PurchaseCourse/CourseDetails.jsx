import React from 'react'
import "./PurchaseCourse.css"
import HOC from "../../Common/HOC";
import { Grid, Card, Button } from '@material-ui/core';

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
                                    <div className="mt-3">
                                        <Button
                                            variant="contained"
                                            className="button_formatting"

                                        >
                                            Free Class
                                        </Button>
                                        <div className="course_detail_content mt-2">6 Months Validity</div>
                                    </div>
                                </Grid>
                                <Grid item md={6} className="p-2"></Grid>
                            </Grid>

                            <hr />
                        </Grid>
                    </Grid>
                </div>

            </div>
        </>
    )
}

export default HOC(CourseDetails)
