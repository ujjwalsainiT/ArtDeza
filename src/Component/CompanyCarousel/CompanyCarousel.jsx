import React from 'react'
import "./CompanyCarousel.css";
import OwlCarousel from 'react-owl-carousel';
import { Card } from '@material-ui/core';
const options = {
    loop: true,
    nav: false,
    autoplay: true,
    // autoplayHoverPause: false,
    // mouseDrag: true,
    // margin: 0,
    // center: false,
    dots: false,
    slidetransition: 'linear',
    autoplayTimeout: 1000,
    // autoplayHoverPause: false,
    autoplaySpeed: 500,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        },
    }
}
function CompanyCarousel() {
    return (
        <>
            <OwlCarousel
                className="brand-wrap owl-carousel owl-theme"
                {...options}
            >
                <div className="single-brand">
                    <Card className="Card_shadow m-2">
                        <img class="logo" src="https://img.icons8.com/color/100/000000/google-logo.png" alt="" />
                    </Card>
                </div>

                <div className="single-brand">
                    <Card className="Card_shadow m-2">
                        <img class="logo" src="https://img.icons8.com/color/100/000000/linkedin.png" alt="" />
                    </Card>
                </div>

                <div className="single-brand">
                    <Card className="Card_shadow m-2">
                        <img class="logo" src="https://img.icons8.com/color/100/000000/yahoo.png" alt="" />
                    </Card>
                </div>

                <div className="single-brand">
                    <Card className="Card_shadow m-2">
                        <img class="logo" src="https://img.icons8.com/color/100/000000/amazon.png" alt="" />
                    </Card>
                </div>

                <div className="single-brand">
                    <Card className="Card_shadow m-2">
                        <img class="logo" src="https://img.icons8.com/color/100/000000/amazon.png" alt="" />
                    </Card>
                </div>

                <div className="single-brand">
                    <Card className="Card_shadow m-2">
                        <img class="logo" src="https://img.icons8.com/color/100/000000/amazon.png" alt="" />
                    </Card>
                </div>

                <div className="single-brand">
                    <Card className="Card_shadow m-2">
                        <img class="logo" src="https://img.icons8.com/color/100/000000/amazon.png" alt="" />
                    </Card>
                </div>

                <div className="single-brand">
                    <Card className="Card_shadow m-2">
                        <img class="logo" src="https://img.icons8.com/color/100/000000/amazon.png" alt="" />
                    </Card>
                </div>
            </OwlCarousel>
        </>
    )
}

export default CompanyCarousel
