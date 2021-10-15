import React from 'react'
import "./StudentReviews.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card, Grid } from '@material-ui/core';

function StudentReviews() {
    return (
        <>
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
            >
                <div class="item">

                    <Card className="Card_shadow outside_border">
                        <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                            <Grid item md={3}>
                                <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" alt="" className="review_imgae" />
                            </Grid>
                            <Grid item md={9}>
                                <div className="Certification_para_formatting">Lorem Ipsum</div>
                                <div><i class="fa fa-star"></i></div>
                            </Grid>
                        </Grid>
                        <div className="p-3 Certification_para_formatting">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                            typeface without relying on meaningful content. </div>
                    </Card>

                </div>

            </OwlCarousel>
        </>
    )
}

export default StudentReviews
