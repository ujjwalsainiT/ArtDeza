import React, { useEffect } from 'react'
import HOC from "../../Common/HOC";
import Topcarousel from '../Topcarousel/Topcarousel';
import { Grid, Card, Button } from '@material-ui/core';
import "./ContactUs.css";

import l from "./l.png";
import m from "./m.png";
import p from "./p.png"

function ContactUs() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Topcarousel />
            <div className="content_padding">
                <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                    <Grid item md={6}>
                        <div className="mt-3 mb-3 top_heading">
                            Contact Us
                        </div>

                        <div className="mt-5 d-flex">
                            <span><img src={l} alt="" className="contact_us_image" /></span>
                            <span className="ml-5">
                                <div className="address_heading">Location :</div>
                                <div className="adress_content">Flat no.:113/A, Amrutha Valley,<br />Rd No. 12, Banjara Hills, Hyderabad,<br /> Telangana 500034, India</div>
                            </span>
                        </div>

                        <div className="mt-5 d-flex">
                            <span><img src={m} alt="" className="contact_us_image" /></span>
                            <span className="ml-5">
                                <div className="address_heading">Email :</div>
                                <div className="adress_content">artdezaindia@gmail.com</div>
                            </span>
                        </div>

                        <div className="mt-5 d-flex">
                            <span><img src={p} alt="" className="contact_us_image" /></span>
                            <span className="ml-5">
                                <div className="address_heading">Call :</div>
                                <div className="adress_content">+91 888-5-310-310</div>
                            </span>
                        </div>

                    </Grid>


                    <Grid item md={6}>
                        <div className="contact_card_margin mt-3">
                            <div className="address_heading text-center mb-1">Share Your Feedback</div>
                            <Card className="Card_shadow  m-2 premium_outside_border">
                                <div className="m-4">
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                                <div className="m-4">
                                    <input type="text" class="form-control" placeholder="E-mail address" />
                                </div>
                                <div className="m-4">
                                    <input type="text" class="form-control" placeholder="Subject" />
                                </div>
                                <div className="m-4">
                                    <textarea class="form-control" placeholder="Message" rows="4"></textarea>
                                </div>
                                <div className="m-5 text-center">
                                    <Button className="contact_us_button">Send Message</Button>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HOC(ContactUs)
