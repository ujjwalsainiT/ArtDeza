import React, { useEffect } from 'react'
import HOC from "../../Common/HOC";
import Topcarousel from '../Topcarousel/Topcarousel';
import { Grid, Card, Button } from '@material-ui/core';
import "./MemberBenifits.css";

import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";

function MemberBenifits() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Topcarousel />
            <div className="content_padding">
                <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                    <Grid item md={4}>
                        <div className="text-center"><img src={i1} alt="" /></div>
                        <div className="text-center text-danger">Unlimited and lifetime access<br />(Premium courses)</div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="text-center"><img src={i2} alt="" /></div>
                        <div className="text-center text-danger">Discount on gear purchase</div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="text-center"><img src={i3} alt="" /></div>
                        <div className="text-center text-danger">Discount for Bootcamps</div>
                    </Grid>
                </Grid>

                <div className="mt-5 mb-3">
                    <div className="top_heading text-center">Premium Membership plans options</div>
                </div>

                <div className="m-2">
                    <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                        <Grid item md={3}>
                            <Card className="Card_shadow m-2 premium_outside_border text-center">
                                <div className="m-1 card_premium_fonts">Free</div>
                                <div className="cardsdata_premium">No Access</div>
                                <div className="cardsdata_premium mt-2">No Access</div>
                                <div className="cardsdata_premium mt-2">No Access</div>
                                <div className="cardsdata_premium mt-2">No Access</div>
                                <div className="mt-2"><Button className="premium_button"> Sign Up</Button></div>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card className="Card_shadow  m-2 premium_outside_border text-center">
                                <div className="m-1 card_premium_fonts">Monthly(199)</div>
                                <div className="cardsdata_premium">Unlimited Access</div>
                                <div className="cardsdata_premium mt-2">Unlimited Access</div>
                                <div className="cardsdata_premium mt-2">Unlimited Access</div>
                                <div className="cardsdata_premium mt-2">Unlimited Access</div>
                                <div className="mt-2"><Button className="premium_button"> Pay Now</Button></div>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card className="Card_shadow  m-2 premium_outside_border text-center">
                                <div className="m-1 card_premium_fonts">Quaterly(499)</div>
                                <div className="cardsdata_premium">Unlimited Access</div>
                                <div className="cardsdata_premium mt-2">Unlimited Access</div>
                                <div className="cardsdata_premium mt-2">Unlimited Access</div>
                                <div className="cardsdata_premium mt-2">Unlimited Access</div>
                                <div className="mt-2"><Button className="premium_button"> Pay Now</Button></div>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card className="Card_shadow  m-2 premium_outside_border text-center">
                                <div className="m-1 card_premium_fonts">Yearly(999)</div>
                                <div className="cardsdata_premium">Unlimited Access</div>
                                <div className="cardsdata_premium mt-2">Unlimited Access</div>
                                <div className="cardsdata_premium mt-2">Unlimited Access</div>
                                <div className="cardsdata_premium mt-2">Unlimited Access</div>
                                <div className="mt-2"><Button className="premium_button"> Pay Now</Button></div>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default HOC(MemberBenifits)
