import React, { useEffect } from 'react';
import "./AfterLoginPage.css";
import HOC1 from '../../Common/HOC1.jsx';
import { Card, Button } from '@material-ui/core';

//phone input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function CoursesEnroll() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="data_Padding_after_login pb-5">
                <Card className="Card_shadow  m-2 p-2">
                    <div className="top_heading text-center"> Update Profile</div>


                </Card>
            </div>
        </>
    )
}

export default HOC1(CoursesEnroll)
