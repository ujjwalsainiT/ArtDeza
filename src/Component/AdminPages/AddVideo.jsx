import React, { useEffect, useState } from 'react';
import "./Adminpages.css";
import AdminHOC from '../../Common/AdminHOC.jsx';
import { Card, Grid, Button } from '@material-ui/core';
import Expand from "react-expand-animated";


function CoursesEnroll() {
    //local state
    const [addMangeopen, setaddMangeopen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="data_Padding_after_login pb-5">
                <Card className="Card_shadow  m-2 p-2">
                    {!addMangeopen ? (
                        <div className="d-flex">
                            <span className="icon_color">
                                <i className="fa fa-plus-circle"></i>
                            </span>
                            <span className="mt-1 ml-2 addmanageuserfont hover_cursor" onClick={() => setaddMangeopen(!addMangeopen)}>
                                <strong> Add New New</strong>
                            </span>
                        </div>
                    ) : (
                        <Expand open={addMangeopen}>
                            <Card className=" mb-2 Card_shadow">
                                <div className="card_admissiondetails_height">
                                    <div className="textfiled_margin">
                                        <div className="card_content_instition">
                                            <div
                                                className="text-right"
                                                onClick={() => setaddMangeopen(!addMangeopen)}
                                            >
                                                <span className="icon_color">
                                                    <i class="fa fa-times hover_cursor"></i>
                                                </span>
                                            </div>
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
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    placeholder="Enter Author name"
                                                ></textarea>

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
                        </Expand>
                    )}
                </Card>
            </div>
        </>
    )
}

export default AdminHOC(CoursesEnroll)
