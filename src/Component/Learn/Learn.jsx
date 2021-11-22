import React, { useEffect } from 'react'
import HOC from "../../Common/HOC";
import Topcarousel from '../Topcarousel/Topcarousel';
import PremiumTutorial from '../VideoCarousel/PremiumTutorial';
import VideoCarousel from '../VideoCarousel/VideoCarousel';
import { Grid, Card, Button } from '@material-ui/core';
import "./Learn.css";


import i1 from "../images/i1.png";
import i2 from "../images/i2.png";
import i3 from "../images/i3.png";
import i4 from "../images/i4.png";

function Learn(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const MyCoursesArr = [
        { data: "Lightroom essentials" },
        { data: "Bigning to Photo" },
        { data: "Lightroom essentials" },
        { data: "Lightroom essentials" },
    ]

    return (
        <>
            <div className="learn_back_color">
                <Topcarousel />

                <div className="m-3">
                    {/* <VideoCarousel /> */}

                    <Grid className="d-flex flex-wrap">
                        {MyCoursesArr.length > 0 ? (MyCoursesArr.map((item, index) => (
                            <Grid item md={3} className="p-3">

                                <Card className=" mb-2 Card_shadow p-2" onClick={() => props.history.push("/course-detail")}>
                                    <div>
                                        <img src="https://images.thequint.com/thequint%2F2021-08%2F46ed82ca-a881-46d4-903e-9107e390da30%2Fimgonline_com_ua_resize_Q2xrLROaqP64.jpg" alt="" style={{ width: "100%", height: "200px" }} />
                                    </div>
                                    <div className="My_course_title">{item.data}</div>
                                    <div className="author_name">Jhone Doe</div>
                                    <hr />
                                    <div className="start_click hover_cursor">Start Now</div>
                                    <div className="author_name">Valid Till: <span className="start_click">Dec 15, 2021</span></div>
                                </Card>

                            </Grid>
                        ))) : (
                            <div className="text-center">No data</div>
                        )}
                    </Grid>

                </div>
                <div className="m-3">
                    <PremiumTutorial />
                </div>
                <div className="m-3">
                    <div className="Learn_top_heading">UPCOMING EVENTS</div>

                    <div className="pt-3 Learn_top_heading">Workshops</div>

                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={3}>
                            <div className="m-2">
                                <Card className="Card_shadow">
                                    <img src="https://i.pinimg.com/originals/bc/aa/d0/bcaad00d4bf16fd94bc45665ddad18e9.jpg" alt="" className="cards_image" />
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
                                    <img src="https://i.pinimg.com/originals/bc/aa/d0/bcaad00d4bf16fd94bc45665ddad18e9.jpg" alt="" className="cards_image" />
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
                                    <img src="https://i.pinimg.com/originals/bc/aa/d0/bcaad00d4bf16fd94bc45665ddad18e9.jpg" alt="" className="cards_image" />
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
                                    <img src="https://i.pinimg.com/originals/bc/aa/d0/bcaad00d4bf16fd94bc45665ddad18e9.jpg" alt="" className="cards_image" />
                                    <div className="p-2 backcolor_card_tag text-center">
                                        <div>Master Photography</div>
                                        <div>10/11/2021 - 15/11/2021</div>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="pt-3 Learn_top_heading">Bootcamps</div>

                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={3}>
                            <div className="m-2">
                                <Card className="Card_shadow">
                                    <img src="https://i.pinimg.com/originals/bc/aa/d0/bcaad00d4bf16fd94bc45665ddad18e9.jpg" alt="" className="cards_image" />
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
                                    <img src="https://i.pinimg.com/originals/bc/aa/d0/bcaad00d4bf16fd94bc45665ddad18e9.jpg" alt="" className="cards_image" />
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
                                    <img src="https://i.pinimg.com/originals/bc/aa/d0/bcaad00d4bf16fd94bc45665ddad18e9.jpg" alt="" className="cards_image" />
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
                                    <img src="https://i.pinimg.com/originals/bc/aa/d0/bcaad00d4bf16fd94bc45665ddad18e9.jpg" alt="" className="cards_image" />
                                    <div className="p-2 backcolor_card_tag text-center">
                                        <div>Master Photography</div>
                                        <div>10/11/2021 - 15/11/2021</div>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>


                    <div className="pt-3 Learn_top_heading">E-COURSES</div>

                    <div className="content_padding">
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

                        <div className="text-center mt-3 pb-3">
                            <Button className="admission_registration_button">Admission Registration</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Learn)
