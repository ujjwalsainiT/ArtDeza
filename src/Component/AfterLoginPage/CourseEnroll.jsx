import React from 'react';
import "./AfterLoginPage.css";
import HOC1 from '../../Common/HOC1.jsx';
function CourseEnroll() {
    return (
        <>
            <div className="signup_Login_padding pb-5">
                My Courses
            </div>
        </>
    )
}

export default HOC1(CourseEnroll)
