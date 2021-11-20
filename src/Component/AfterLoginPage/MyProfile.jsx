import React, { useEffect } from 'react';
import "./AfterLoginPage.css";
import HOC1 from '../../Common/HOC1.jsx';
import { Card, Button } from '@material-ui/core';

//phone input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function MyProfile() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="data_Padding_after_login pb-5">
                <Card className="Card_shadow  m-2 p-2">
                    <div className="top_heading text-center"> Update Profile</div>

                    <div className="mx-auto mt-4">
                        <div className="text-center">
                            <img
                                src="https://afa.org.sg/wp-content/uploads/2014/05/icon-user-default-copy.png"
                                alt=""
                                id="img"
                                className="profile_Edit"
                            />
                        </div>
                        <div className="profile_input text-center">
                            <input
                                type="file"
                                accept="image/*"
                                name="image-upload"
                                id="input"
                            // onChange={(e) => {
                            //     setshowimage(URL.createObjectURL(e.target.files[0]))
                            // }}
                            />
                            <div className="">
                                <label className="resumeview_image_upload" htmlFor="input">
                                    <i class="fa fa-camera mr-1"></i>

                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="top_heading text-center">Update Profile Details</div>
                        <div className="content_padding">
                            <div className="mt-1">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="Enter Name" />
                            </div>
                            <div className="mt-1">
                                <label>Email</label>
                                <input type="text" class="form-control" placeholder="Enter Email" />
                            </div>

                            <div className="mt-1 Update_profile">
                                <label>Mobile Number</label>
                                <PhoneInput
                                    country={'in'}
                                    countryCodeEditable={false}
                                // value={phone}
                                // onChange={(e) => {
                                //     setphoneError(false)
                                //     setphone(e)
                                // }}
                                />
                            </div>

                            <div className="mt-2 mb-2 text-right">
                                <Button className="update_profile_btn">Save</Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="top_heading text-center">Change Password</div>
                        <div className="content_padding">
                            <div className="mt-1">
                                <label>Current Password</label>
                                <input type="text" class="form-control" placeholder="Enter Current Passwword" />
                            </div>
                            <div className="mt-1">
                                <label>New Password</label>
                                <input type="text" class="form-control" placeholder="Enter New Password" />
                            </div>

                            <div className="mt-1">
                                <label>Retype new Password</label>
                                <input type="text" class="form-control" placeholder="Enter Retype New Password" />
                            </div>

                            <div className="mt-2 mb-2 text-right">
                                <Button className="update_profile_btn">Save</Button>
                            </div>

                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default HOC1(MyProfile)
