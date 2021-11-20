import React, { useState, useEffect } from "react";
import HOC from "../../Common/HOC.jsx";
//css file
import "./Register.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";


//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";



const Login = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);


    return (
        <>
            <div className="signup_Login_padding pb-5">
                <div className="Register_Main_div ">
                    <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                        <p className="page_heading mt-3">Login</p>
                        <div className="main_padding_top_bottom">

                            <div>
                                <TextField
                                    placeholder="Email"
                                    id="outlined-basic"
                                    variant="outlined"
                                    autoComplete="off"

                                />

                            </div>

                            <div className="mt-2">
                                <FormControl className="MuiFormControl-fullWidth" variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        placeholder="Password"

                                        type={showPassword ? "text" : "password"}
                                        autoComplete="off"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setshowPassword(!showPassword)}
                                                    onMouseDown={(event) => event.preventDefault()}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>

                            </div>

                            <div className="inputfiledformatting mt-3">
                                <Button
                                    variant="contained"
                                    className="login_register_btn"
                                    onClick={() => {
                                        window.location.href = "/home"
                                        localStorage.setItem("isAuth", true)
                                    }}

                                >
                                    Log in
                                </Button>
                            </div>

                        </div>
                    </Card>

                    <Card className="pt-2 pb-2 Card_shadow mt-2">
                        <div>I don't have an account, <span className="Login_in" onClick={() => props.history.push("/register")}>Register</span></div>
                        <span className="Login_in">forgot Password?</span>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default HOC(Login);
