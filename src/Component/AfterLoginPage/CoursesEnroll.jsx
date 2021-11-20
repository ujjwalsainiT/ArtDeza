import React, { useEffect, useState } from 'react';
import "./AfterLoginPage.css";
import HOC1 from '../../Common/HOC1.jsx';
import { Card, Grid } from '@material-ui/core';


function CoursesEnroll() {
    const [name, setname] = useState("")
    const MyCoursesArr = [
        { data: "Lightroom essentials" },
        { data: "Bigning to Photo" },
        { data: "Lightroom essentials" },
        { data: "Lightroom essentials" },
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const filterData = MyCoursesArr.filter((event) => {
        return (
            event.data.toLowerCase().indexOf(name.toLowerCase()) !== -1
        );
    });
    return (
        <>
            <div className="data_Padding_after_login pb-5">
                <Card className="Card_shadow  m-2 p-2">
                    <div className="top_heading text-center"> My Courses</div>
                    <div className="mt-2">
                        <Grid className="d-flex flex-wrap">
                            <Grid item md={4} className="p-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by course name"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="mt-3">

                        <Grid className="d-flex flex-wrap">
                            {filterData.length > 0 ? (filterData.map((item, index) => (
                                <Grid item md={4} className="p-3">

                                    <Card className=" mb-2 Card_shadow p-2">
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

                </Card>
            </div>
        </>
    )
}

export default HOC1(CoursesEnroll)
