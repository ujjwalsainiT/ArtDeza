import React from 'react'

//css file
import "./Footer.css";

function Footer(props) {
    return (
        <>

            <div className="mt-5 p-4 footer_back_color">
                <div className="copyright_formating"> @ Copyright Artdeza. All Rights Reserved</div>
                <div className="copyright_formating">Designed By <span className="designed_by">Flyweis Technology</span></div>
            </div>
        </>
    )
}

export default Footer
