import React, { useState, useEffect } from 'react'
import { Card, Button, Dialog, DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import Expand from "react-expand-animated";

//common HOC
import AdminHOC from "../../Common/AdminHOC.jsx";

//used css
import "./Adminpages.css";

function AddCategory(props) {

    //local state
    const [addMangeopen, setaddMangeopen] = useState(false);
    const [category, setcategory] = useState("");
    const [CategoryDataArr] = useState([]);
    const [EditDailogOpen, setEditDailogOpen] = useState(false);
    const [Editcategory, setEditcategory] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    const OpenEditDailog = () => {
        setEditDailogOpen(!EditDailogOpen)
    }

    return (
        <>
            <div className="data_Padding_after_login">

                <div className="mb-3 page_heading">Manage category</div>
                <Card className="pt-3 pb-4 Card_shadow">
                    <div className="card_admissiondetails_height">
                        <div className="textfiled_margin">
                            {!addMangeopen ? (
                                <div>
                                    <span className="addmanageuserfont hover_cursor" onClick={() => setaddMangeopen(!addMangeopen)}>
                                        <i className="fa fa-plus-circle icon_color mr-1"></i> <strong> Add New Category</strong>
                                    </span>
                                </div>
                            ) : (
                                <Expand open={addMangeopen}>
                                    <Card className=" mb-2 Card_shadow">
                                        <div className="card_admissiondetails_height">
                                            <div className="textfiled_margin">
                                                <div className="card_content_instition">
                                                    <div className="text-right">
                                                        <span className="icon_color hover_cursor">
                                                            <i class="fa fa-times cursor" onClick={() => setaddMangeopen(!addMangeopen)}></i>
                                                        </span>
                                                    </div>
                                                    <div className="text_filed_heading">
                                                        Category Name
                                                    </div>
                                                    <div className=" mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            placeholder="Enter the category"
                                                            autoComplete="off"
                                                            value={category}
                                                            onChange={(e) => {
                                                                setcategory(e.target.value);
                                                            }}
                                                        />

                                                    </div>

                                                </div>
                                                <div className="mt-2 pb-2 ">
                                                    <Button
                                                        variant="contained"
                                                        className="button_formatting"
                                                    >
                                                        Create
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Expand>
                            )}
                        </div>
                    </div>

                    <div className="card_admissiondetails_height mt-4">
                        <div className="textfiled_margin cardheight_overflow">

                            <hr />
                            {CategoryDataArr.length > 0 ?
                                (CategoryDataArr.map((item, index) => (
                                    <Card className="Card_shadow mb-2 mt-2">
                                        <div className="card_admissiondetails_height">
                                            <div className="textfiled_margin">
                                                <div className="d-flex justify-content-between">

                                                    <div className=" p-2">

                                                    </div>

                                                    {" "}
                                                    <div className="d-flex p-2">

                                                        <span className="action_icon mr-2 ml-1">
                                                            <i
                                                                className="fa fa-pencil"
                                                                onClick={() => OpenEditDailog}
                                                            ></i>
                                                        </span>
                                                        <span className="action_icon ml-2">
                                                            <i
                                                                className="fa fa-trash "

                                                            ></i>
                                                        </span>

                                                    </div>

                                                </div>
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

            <Dialog
                open={EditDailogOpen}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                fullWidth="fullWidth"
            >
                <DialogTitle>
                    Edit Category
                    <span
                        className="float-right icon_color"

                    >
                        <i class="fa fa-times hover_cursor" onClick={() => setEditDailogOpen(!EditDailogOpen)}></i>{" "}
                    </span>
                </DialogTitle>
                <DialogContent>
                    <div className="text_filed_heading">
                        Category Name
                    </div>
                    <div className=" mt-1">
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Enter the Category"
                            autoComplete="off"
                            value={Editcategory}
                            onChange={(e) => {
                                setEditcategory(e.target.value);
                            }}
                        />

                    </div>

                </DialogContent>
                <DialogActions>
                    <Button
                        className="button_formatting"
                        onClick={() => setEditDailogOpen(!EditDailogOpen)}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="button_formatting"

                    >
                        Save{" "}
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    )
}

export default AdminHOC(AddCategory)
