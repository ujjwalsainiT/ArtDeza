import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import AboutUs from "./Component/About/AboutUs";
import MemberBenifits from "./Component/MemberBenifits/MemberBenifits";
import ContactUs from "./Component/Contact/ContactUs";
import Learn from "./Component/Learn/Learn";
import Register from "./Component/Register/Register";
import Login from "./Component/Register/Login";
import MyProfile from "./Component/AfterLoginPage/MyProfile";
import CoursesEnroll from "./Component/AfterLoginPage/CoursesEnroll";
import PurchaseHistory from "./Component/AfterLoginPage/PurchaseHistory";

import AdminHomePage from "./Component/AdminPages/AdminHomePage.jsx";
import AddVideo from "./Component/AdminPages/AddVideo";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/members-benifits" component={MemberBenifits} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/my-profile" component={MyProfile} />
        <Route exact path="/my-courses" component={CoursesEnroll} />
        <Route exact path="/purchase-history" component={PurchaseHistory} />

        {/*Addmin pages */}
        <Route exact path="/admin-home" component={AdminHomePage} />
        <Route exact path="/add-video" component={AddVideo} />
      </Switch>
    </>
  );
}

export default App;
