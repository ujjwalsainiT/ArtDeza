import React from "react";
import { Grid } from "@material-ui/core";

//css file
import "./Footer.css";

function Footer(props) {
  return (
    <>
      <div className="footer_main">
        <div className="footer_top">
          <div className="text-center pb-3 pt-3">
            <div className=" mt-2">
              <span className="icons_style ">
                <i className="fa fa-facebook"></i>
              </span>

              <span className="icons_styles ">
                <i className="fa fa-twitter"></i>
              </span>
              <span className="icons_styles">
                <i className="fa fa-linkedin"></i>
              </span>
              <span className="icons_styles">
                <i class="fa fa-instagram"></i>
              </span>
              <span className="icons_styles">
                <i class="fa fa-pinterest-square"></i>
              </span>
              <span className="icons_styles">
                <i class="fa fa-youtube"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="footer_back_color">
          <p className="help">Questions? Call 000-000-040-1843</p>
          <Grid className="Component_main_grid p-4 footer_color_text">
            <Grid item md={2} className="p-3 ">
              <div className="FotterHead_links">FAQ</div>
              <div className="Footer_heading_Links mt-2">
                Investor Relations
              </div>
              <div className="Footer_heading_Links mt-1">Privacy</div>
              <div className="Footer_heading_Links mt-1">Speed Test</div>
            </Grid>
            <Grid item md={2} className="p-3">
              <div className="FotterHead_links">Help Centre</div>
              <div className="Footer_heading_Links mt-2">Jobs</div>
              <div className="Footer_heading_Links mt-1">
                Cookie Preferences
              </div>
              <div className="Footer_heading_Links mt-1">Legal Notices</div>
            </Grid>
            <Grid item md={2} className="p-3">
              <div className="FotterHead_links">Account</div>
              <div className="Footer_heading_Links mt-2">Ways to Watch</div>
              <div className="Footer_heading_Links mt-1">
                Corporate Information
              </div>
              <div className="Footer_heading_Links mt-1">Netflix Originals</div>
            </Grid>
            <Grid item md={2} className="p-3">
              <div className="FotterHead_links">Media Centre</div>
              <div className="Footer_heading_Links mt-2">Terms of Use</div>
              <div className="Footer_heading_Links mt-1">Contact Us</div>
            </Grid>

            <Grid item md={4} className="card_form p-3">
              <h3>Join our newsletter</h3>
              <p>Be the first to get updates tips , discounts and more.</p>

              <div>
                <span>
                  <input placeholder="Email address" className="input_mail" />
                </span>
                <button className="email_btn">
                  <i class="fa fa-paper-plane "></i>
                </button>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="footer_bottom">
          <div className="text-center pb-2 pt-2">
            <div className=" mt-2">
              <div className="footer_year mt-1">
                @ {new Date().getFullYear()} Artdeza . All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
