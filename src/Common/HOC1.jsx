import React, { Fragment, Component } from "react";
// import Footer from "./Footer/Footer.jsx";
import UserDashboardHeader from "./Header/UserDashboardHeader.jsx";
const HOC1 = (Wcomponent) => {
    return class extends Component {
        render() {
            return (
                <Fragment>
                    <div className="app-container-hoc main-margin">
                        <UserDashboardHeader {...this.props} />
                        <div>
                            <Wcomponent {...this.props} />
                        </div>
                        {/* <Footer {...this.props} /> */}
                    </div>
                </Fragment>
            );
        }
    };
};

export default HOC1;
