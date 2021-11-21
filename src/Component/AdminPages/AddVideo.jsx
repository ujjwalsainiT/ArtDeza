import React, { useEffect, useState } from 'react';

//used css
import "./Adminpages.css";
import AdminHOC from '../../Common/AdminHOC.jsx';
import { Card, Grid, Button } from '@material-ui/core';

function CoursesEnroll() {

    //local state
    const [VideoDataArr] = useState([])
    const [radiovalue, setradiovalue] = useState("Free")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // handle click  for radio button
    const radioHandler = (event) => {
        setradiovalue(event.target.value)
    };

    return (
        <>
            <div className="data_Padding_after_login pb-5">
                <div className="Manage_video_headding m-2">Manage All Videos </div>
                <Card className="Card_shadow  m-2 p-2">

                    <div className="d-flex">
                        <label className="radio_font">
                            <input
                                className="mr-2"
                                type="radio"
                                name="optradio"
                                checked={radiovalue === "Free"}
                                value="Free"
                                onChange={(e) => radioHandler(e)}
                            />
                            Add Free Video
                        </label>
                        <label className="radio_font">
                            <input
                                className="mr-2"
                                type="radio"
                                name="optradio"
                                checked={radiovalue === "Paid"}
                                value="Paid"
                                onChange={(e) => radioHandler(e)}
                            />
                            Add Paid Video
                        </label>
                    </div>


                    <Card className=" mb-2 Card_shadow">
                        <div className="card_admissiondetails_height">
                            <div className="textfiled_margin">
                                <div className="card_content_instition">

                                    <div className="text_filed_heading">
                                        Video Name
                                    </div>
                                    <div className=" mt-1">
                                        <input
                                            type="text"
                                            className="form-control "
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                        />

                                    </div>

                                    <div className="text_filed_heading">
                                        Author
                                    </div>
                                    <div className=" mt-1">
                                        <input
                                            type="text"
                                            className="form-control "
                                            placeholder="Enter Author Name"
                                            autoComplete="off"
                                        />

                                    </div>

                                    <div className="text_filed_heading">
                                        Upload video
                                    </div>
                                    <div className=" mt-1">
                                        <input
                                            type="file"
                                            className="form-control "
                                            autoComplete="off"
                                            accept="video/*"


                                        />

                                    </div>

                                    {radiovalue === "Free" ? (
                                        ""
                                    ) : (
                                        <div>
                                            <div className="text_filed_heading">
                                                Price(in Rs.)
                                            </div>
                                            <div className=" mt-1">
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Enter Price"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                    )}

                                </div>
                                <div className="mt-2 pb-2 ">
                                    <Button
                                        variant="contained"
                                        className="button_formatting"

                                    >
                                        Add Video
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>


                    <div className="card_admissiondetails_height mt-4">
                        <div className="textfiled_margin cardheight_overflow">

                            <hr />
                            {VideoDataArr.length > 0 ?
                                (VideoDataArr.map((item, index) => (
                                    <Card className="Card_shadow mb-2 mt-2">
                                        <div className="card_admissiondetails_height">
                                            <div className="textfiled_margin">
                                                <Grid className="Component_main_grid mt-2">
                                                    <Grid item md={4}>
                                                        <div className=" p-2">

                                                        </div>
                                                    </Grid>
                                                    <Grid item md={4}>
                                                        <div className=" p-2">

                                                        </div>
                                                    </Grid>
                                                    <Grid item md={4}>
                                                        <div className="d-flex p-2">

                                                            <span className="icon_color mr-2 ml-1">
                                                                <i
                                                                    className="fa fa-edit hover_cursor"

                                                                ></i>
                                                            </span>
                                                            <span className="icon_color ml-2">
                                                                <i
                                                                    className="fa fa-trash hover_cursor"

                                                                ></i>
                                                            </span>

                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </div>
                                        </div>
                                    </Card>
                                )))
                                : (
                                    <span>No Data</span>
                                )}
                        </div>
                    </div>

                </Card>
            </div>
        </>
    )
}

export default AdminHOC(CoursesEnroll)
