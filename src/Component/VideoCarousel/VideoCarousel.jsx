import React from 'react'
import "./VideoCarousel.css";
import OwlCarousel from 'react-owl-carousel';

const options = {
    loop: true,
    nav: false,
    autoplay: false,
    mouseDrag: false,
    touchDrag: true,
    // margin: 0,
    // center: false,
    dots: true,
    slidetransition: 'linear',
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    autoplaySpeed: 5000,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 3
        },
    }
}

function VideoCarousel() {
    return (
        <>

            <div className="m-4">
                <span className="youtube_icon_formatting"><i className="fa fa-youtube"></i></span>
                <span className="ml-3 Video_tutorial_heading">Video Tutorials</span>
            </div>
            <OwlCarousel
                className="brand-wrap owl-carousel owl-theme"
                {...options}
            >
                <div className="single-brand"><iframe className="iframe_width_video" src="https://www.youtube.com/embed/V7z7BAZdt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="single-brand"><iframe className="iframe_width_video" src="https://www.youtube.com/embed/V7z7BAZdt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="single-brand"><iframe className="iframe_width_video" src="https://www.youtube.com/embed/V7z7BAZdt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="single-brand"><iframe className="iframe_width_video" src="https://www.youtube.com/embed/V7z7BAZdt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="single-brand"><iframe className="iframe_width_video" src="https://www.youtube.com/embed/V7z7BAZdt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="single-brand"><iframe className="iframe_width_video" src="https://www.youtube.com/embed/V7z7BAZdt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="single-brand"><iframe className="iframe_width_video" src="https://www.youtube.com/embed/V7z7BAZdt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="single-brand"><iframe className="iframe_width_video" src="https://www.youtube.com/embed/V7z7BAZdt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="single-brand"><iframe className="iframe_width_video" src="https://www.youtube.com/embed/V7z7BAZdt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            </OwlCarousel>
        </>
    )
}

export default VideoCarousel
