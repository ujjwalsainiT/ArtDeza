import React from 'react'
import { Button } from '@material-ui/core';
import "./Topcarousel.css";

function Topcarousel() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.smartertravel.com/wp-content/uploads/2017/06/photo-prints-hand-holding-camera-dslr-1200x627.jpg" alt="" className="crasoul_image" />
                        <div className="carousel-caption d-md-block">
                            <p className="learn_photo">Learn Photography Online</p>
                            <p className="caption">Learn from scratch</p>
                            <Button className="crasoul_button">Join Now</Button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1617463874381-85b513b3e991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" className="crasoul_image" />
                        <div className="carousel-caption d-md-block">
                            <p className="learn_photo">"Don't <span className="text-danger">shoot</span> what it lookslike.<br /> Shoot what it <span className="text-danger">feels</span> like."</p>

                            <Button className="crasoul_button">Join Bootcamps</Button>
                        </div>
                    </div>
                    
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Topcarousel
